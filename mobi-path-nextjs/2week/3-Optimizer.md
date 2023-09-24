## 🙆‍♀️ Font Optimization in Next.js13

next13이 소개되면서 @next/font라는 패키지 새롭게 추가되었다.<br/>
next/font는 사용자 정의 폰트를 포함하여 모든 폰트 파일을 자동으로 최적화 하고, 개인 정보 보호와 향상을 위해 외부 네트워크 요청을 제거한다.

### 🤔 어떻게 최적화를 해주는가?

➡️ next/font에는 모든 폰트 파일에 대한 내장 자체 호스팅이 포함되어 있다. <br/>
➡️ 이를 통해 기본적으로 css의 size-adjust 속성을 사용해 웹 폰트를 최적으로 로드할 수 있도록 해주고, zero-layout shift를 지원한다.
(layout shift가 일어나지 않는것)<br/>
➡️ 네트워크 환경과 상관 없이 일관적인 UX 경험을 제공하는 데 초점을 맞추고 있다.

#### 적용 이미지

<img width="363" alt="스크린샷 2023-09-25 005347" src="https://github.com/Sueddd/Mobi/assets/111338578/7884c7b0-1a50-4c04-b762-b6ca2fbf653c">

위쪽은 layout-shift가 된 일어남<br/>
아래쪽은 layout-shift가 일어나지 않았다.<br/>
➡️이는 next/font를 적용했기 때문에 layout shift를 발생시킬 수 있는 size 차이를 비교해서 size-adjust 속성을 조정한 방식으로 동작

---

### 🖥️ 코드로 적용해보기

📍 variable font로 제공하는 경우

```
import { Inter } from 'next/font/google'

// 변수를 선언
const inter = Inter({ subsets: ['latin'] })

// main 태그에서 className으로 설정하면 해당 폰트가 전역 default가 된다.
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

<br/>
📍 variable로 제공하지 않는 경우, 직접 weight를 지정해줘야 한다.

```
import { Noto_Sans_KR } from "next/font/google";

const NotoR = Noto_Sans_KR({
  weight: "400",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={NotoR.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

<br/>
📍 전역이 아닌 직접 css 속성을 통해 지정

```
 => variable 속성에 이름 지정, font-family에 적용 시켜야 함

 import { Noto_Sans_KR } from "next/font/google";

const NotoB = Noto_Sans_KR({
  weight: "700",
  subsets: ["latin"],
  variable: "--Noto-B",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={NotoB.variable}> {/* className이 아닌 variable로 지정 */}
      <Component {...pageProps} />
    </main>
  )
}

font-family: var(--Noto-B);
```

<br/>
📍폰트를 여러 개 등록할 때

```
import { Noto_Sans_KR } from "next/font/google";

const NotoR = Noto_Sans_KR({
  weight: "400",
  subsets: ["latin"],
});
const NotoB = Noto_Sans_KR({
  weight: "700",
  subsets: ["latin"],
  variable: "--Noto-B",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${NotoR.className} ${NotoB.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}

// NotoR이 default 폰트로 적용, 부분적으로 css의 font-family를 통해 NotoB를 적용 가능
```

<br/>
📍로컬 폰트 적용하기 (권장 x)

```
// next/font/local을 import 하고 로컬 폰트 파일의 src를 지정한다.

import localFont from 'next/font/local';

const myFont = localFont({ src: './my-font.woff2' });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}

// 하나의 폰트 패밀리에 여러 파일을 사용하려면 src를 배열로 지정도 가능

const roboto = localFont({
  src: [
    {
      path: './Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Roboto-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Roboto-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
});
```

### 🤷 변경된 다운로드 시점

➡️ next12에서는 html 파일이 로드된 후, 이 파일이 link하고 있는 font.googleapis.com에서 폰트를 다운로드 한다. <br/>
➡️ next13에서는 빌드 타임에 미리 google font를 다운로드하여 로컬 디렉터리에 저장해둔다. 그 후 html 파일이 이 로컬 파일을 link하도록 구현되어 있다.<br/>
➡️ 결론 : 서로 다른 도메인간 handshaking 과정이 사라지고, 이전보다 비교적 빠른 속도로 파일을 다운로드 할 수 있다.

### 🦾 최적화 과정 (build time)

```
사용자가 입력한 폰트를 하드 코딩된 google-font-metrics.json의 JSON Map으로부터 Value를 읽어온다.

이 Value에는 해당 폰트의 카테고리 계산을 위한 여러 metric들이 들어있고, 이 값들을 사용해 사용자가 입력한 폰트와 fallback font의 사이즈를 조정해 zero-layout-shift가 발생하지 않도록 맞춰준 것이다.


🖥️ 계산 과정 코드
for (const line of fontFaceDeclarations.split('\n')) {
  // Each @font-face has the subset above it in a comment
  const newSubset = /\/\* (.+?) \*\//.exec(line)?.[1]
  if (newSubset) {
    currentSubset = newSubset
  } else {
    const googleFontFileUrl = /src: url\((.+?)\)/.exec(line)?.[1]
    if (
      googleFontFileUrl &&
      !fontFiles.some(
        (foundFile) => foundFile.googleFontFileUrl === googleFontFileUrl
      )
    ) {
      fontFiles.push({
        googleFontFileUrl,
        preloadFontFile:
          !!preload && (callSubsets ?? subsets).includes(currentSubset),
      })
    }
  }
}
```
