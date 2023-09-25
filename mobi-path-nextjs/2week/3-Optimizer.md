## 🙆‍♀️ Font Optimization

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

## 🖼️ Image Optimization

이미지 또는 그림이 최근 웹 어플리케이션이나 웹 페이지 작성에 있는 중요한 부분이 되었다. <br/>
next.js는 버전 10에서부터 Image 컴포넌트를 통해 이미지 최적화를 제공하고 있다.

### 🤔 어떻게 최적화를 하고 있는가?

- lazy loading
- 이미지 사이즈 최적화
- CLS 방지, placeholder 제공

---

### lazy loading이란?

➡️ lazy loading란 이미지 로드 시점을 필요할 때까지 지연시킬 수 있는 기능을 말한다. <br/>
➡️ 뷰포트 계산이 끝날 때까지 이미지 로딩을 홀딩하는 기능이 있어, 페이지 레이아웃이 망가지는 걸 방지할 수 있다. <br>
➡️ Next/Image를 사용하게 되면 자동으로 lazy loading이 적용된다. 이를 적용하고 싶지 않은 경우 Image 컴포넌트의 priority라는 prop을 true로 설정하거나 loading prop에 eager 값을 설정하면 된다. priorty를 설정하면 브라우저가 이 이미지를 먼저 렌더링 한다. <br/>
➡️ 이를 통해 스크린 밖의 이미지들은 로딩을 지연시키고 스크린 안의 이미지만 로드하면, 불필요한 대역폭 사용을 줄이고 필요한 이미지만 빠르게 로드할 수 있는 효과를 얻을 수 있다.

---

### 이미지 사이즈 최적화?

➡️ 페이지가 로딩될 때 화면의 레이아웃이 엉켜보이는 현상인 Cummulative Layout Shift이 있다. <br/>
➡️ 이를 방지하기 위해 이미지의 사이즈를 화면 뷰포트에 맞게 로딩해야 한다. <br/>
➡️ sizes 옵션을 사용하면 브라우저가 페이지를 로딩할 대 페이지 레이아웃을 해치지 않는 상태에서 이미지를 로딩하게 된다. <br/>
➡️ Next/Image에서는 source set을 생성하는 기능이 있는데 이를 이용해 레이아웃을 망치지 않을 수도 있다. <br/>
➡️ sizes 속성은 layout 속성이 꼭 reponsive이거나 fill일 때만 작동한다. <br/>

코드 예시

```
import Image from 'next/image'

const Example = () => (
  <div>
    <Image
      src='/mock.png'
      layout='fill'
      sizes='(min-width: 60em) 24vw,
						 (min-width: 28em) 45vw,
						 100vw'
    />
  </div>
)
```

---

### placeholder의 역할

➡️ Next/Image는 레이아웃이 흔들리는 현상을 방지하기 위해 placeholder를 제공한다.<br/>
➡️ 이미지가 로드되기 전에 이미지 높이 만큼 영역을 표시해, 이미지가 로드된 후 레이아웃이 흔들리지 않도록 한다. <br/>
➡️ 또한, 이미지가 완전히 로딩되기 전 블러처리를 할 수도 있다. empty가 디폴트 값인데, blur라고 지정하면 블러 처리된 이미지가 나타날 것이다.

---

### 🖥️ Next/Image 사용법

#### local image

```
import Image from 'next/image';

function Profile() {
  return (
    <Image
      src={....}
      alt="Picture of me"
      placeholder="blur" // Optional blur-up while loading
    />
  );
}
```

로컬 이미지의 경우 빌드타임에 width, height, base64로 인코딩된 blur이미지가 생성된다. 별도의 작업 없이도 placehoder = "blur"를 사용할 수 있다.

#### remote image

```
// next.config.js
module.exports = {
  images: {
    domains: ['your-cdn-image-domain'],
  },
};
```

Next.js에서 리모트 이미지를 사용할 때는, 해당 이미지를 호스팅하는 서버에 대한 요청이 직접 발생한다.<br/> 이로 인해 잠재적인 보안 위협이 생길 수 있기 때문에, Next.js는 기본적으로 모든 외부 URL에 대한 접근을 허용하지 않는다.<br/> 안전하다고 판단되는 서버의 도메인만 next.config.js 파일에서 명시적으로 허용해야 한다.<br/> 이렇게 함으로써, 악의적인 사용자로부터의 공격을 방지할 수 있다.

### 그 외 Next/Image의 속성들

#### 📍loader , quailty

```
import Image from 'next/image'

const customLoader = ({ src, width, quality }) => {
  return `https://s3.amazonaws.com/image/${src}?w=${width}&q=${quality}`
}

const MyImage = props => {
  return (
    <Image
      src='profile.webp'
      width={300}
      height={300}
      alt='User profile'
      quality={80}
      loader={customLoader}
    />
  )
}
```

loader 옵션은 이미지의 url을 계산해야 할 때 사용되고, quailty는 이미지를 어떤 품질로 보여줄 지 결정하는 속성이다. 기본값 75, 100이 최상의 품질이다.

📍 layout의 4가지 옵션

```
intrinsic : default, 컨테이너 사이즈가 이미지 사이즈보다 작아졌을 대 컨테이너에 맞게 크기를 줄인다.

fixed : 컨테이너 사이즈와 관계 없이 이미지 사이즈를 width, height 속성 값으로 고정한다.

responsive : 작은 컨테이너에서는 크가 줄어들고 큰 컨테이너에서는 크기가 늘어난다.

fill : realtive 포지션을 가진다. 컨테이너의 너비 높이와 동일하게 조정하고, 주로 objectFit 속성과 함께 사용한다.
```

이 속서은 해당 이미지가 뷰포트에 따라 어떻게 반응하는 지에 대한 속성이다.

#### 📍 objectFit

이 속성은 layout = "fill"일 경우 부모 element에 대비해 사이즈를 조정하는 옵션이다. <br/>
해당 값으로는 "fill", "cover","contain"이 있다.

#### 📍 objectPosition

```
<Image
  src='/usr/webp'
  alt='User profile picture'
  width={300}
  height={300}
  objectPosition='right bottom'
/>
```

이 속성은 이미지의 위치를 이미지가 위치하는 부모 콘텐츠 기준으로 배치할 수 있게 하는 속성이다.

---

#### ⭐ next.config.js 파일 설정

next.config.js 파일에 이미지 컴포넌트에 대한 옵션을 지정할 수 있다. <br/>

📍 loader <br/>
loader를 이용하면 컴포넌트에서는 상대 경로로 이미지 위치를 지정하지만, 빌드 시에 절대 경로로 Next.js가 자동 변환 해준다.

```
module.exports = {
  images: {
    loader: 'amazon',
    path: 'https://s3.amazonaws.com/image',
  },
}
```

📍 domians <br/>
domains 옵션은 외부 이미지의 호스트 이름을 지정할 수 있다. <br/>
여기서 지정된 호스트네임만 허용되고 그 이외의 호스트에서 이미지를 불러오면 400 Bad Request가 리턴된다.

```
module.exports = {
  images: {
    domains: ['s3.amazonaws.com'],
  },
}
```
