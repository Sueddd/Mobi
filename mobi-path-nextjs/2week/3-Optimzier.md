next/font에는 모든 글꼴 파일에 대한 자동자체 호스팅이 내장되어 있다.
이는 사용된 기본 CSS 크기 조정 속성 덕분에 레이아웃 변경 없이 웹 글꼴을 최적으로 로드할 수 있음을 의미한다.

next/font에는 모든 글꼴 파일에 대한 자동 자체 호스팅이 내장되어 있다. 이는 사용된 기본 css크기 조정 속성 덕분에 레이아웃 변경 없이 웹 글꼴을 최적으로 로드할 수 있음을 의미한다.

next/font에는 모든 글꼴 파일에 대한 자동 자체 호스팅이 내장되어 있다.
이는 사용된 기본 css 크기 조정 속성 덕분에 레ㄹ이아웃 변경 없이 웹 글꼴을 최적으로 로드할 수 있음을 의미한다.

또한 이 새로운 글꼴 시스템을 사용하면 성능과 개인 정보 보호를 염두에 두고, 모든 구글 글꼴을 편리하게 사용할 수 있다. css및 글꼴 파일은 빌드 시 다운로드되며, 나머지 정적 자산과 함께 자체 호스팅 된다. 브라우저는 요청을 구글로 전송하지 않는다.

또한 이 새로운 글꼴 시스템을 사용하면 성능과 개인정보 보호를 염두에 두고, 모든 구글 글꼴을 편리하게 사용할 수 있다.
css 및 글꼴 파일은 빌드 시 다운로드되며 나머지 정적 자산과 함께 자체 호스팅 된다. 브라우저는 요청을 구글로 전송하지 않는다.

next13이 next/font라는 단위를 추가했다.
next/font에는 빠른 글꼴 로딩과 제로 레이아웃 전환을 지원하기 위한 패키지가 있다.

next13이 next/font라는 단위를 추가했다. next/font에는 빠른 글꼴 로딩과 제로 레이아웃 전환을 지원하기 위한 패키지가 있다.

32px라는 font-size를 주 독립해도 독립적인 사이즈가 군데군데 있기 때문에 이 구별을 잘 부각해 줄 수 있는 손글씨 성분이 구글 폰트라는 이름으로 홈메이드

Zero Layout Shift
우선은 Layout Shift에 관한 내용이다. font-size를 동일하게 맞춰도, 각각의 폰트가 기본적으로 가지고 있는 크기가 조금씩 다르기 때문에 서로 다른 폰트를 교체하는 과정에서 Layout Shift가 발생한다.
이를 FOUT, Flash Of Unstyled Text라고 한다.
Next 12에서는 이에 대해 별다른 처리를 하고 있지 않기 때문에 첫번째 그림처럼 Homemade Apple 폰트가 로드되기 전에 기본적으로 보여주는 Font롸 로드된 폰트의 크기가 달라서 폰트가 로드된 이후에 image가 아래로 밀려나는 Layout Shift가 발생하고 있는 것을 확인할 수 있다.

우선은 Layout Shift에 관한 내용이다.
font-size를 동일하게 맞춰도, 각각의 폰트가 기본적으로 가지고 있는 크기가 조금씩 다르기 때문에 서로 다른 폰트를 교체하는 과정에서 Layout Shift가 발생한다.
Next12 에서는 이에 대해 별다른 처리를 하고 있지 않기 때문에 첫번째 그림처럼 Homemase Apple 폰트가 로드되기 전에 기본적으로 보여주는 폰트와 로드된 폰트의 크기가 달라서 폰트가 로드된 이후에 image가 아래로 밀려나는 layout shift가 발생하고 있는 것을 확인할 수 있다.

우선은 Layout Shift에 관한 내용이다.
font-size를 동일하게 맞춰도, 각각의 폰트가 기본적으로 가지고 있는 크기가 조금씩 다르기 때문에 서로 다른 폰트를 교체하는 과정에서 Layou Shift가 발생한다.
Next 12에서는 이에 대해 별다른 처리를 하고 있지 않기 때문에 첫번째 그림처럼 Homemade Apple 폰트가 로드되기 전에 기본저긍로 보여주는 Font와 로드된 폰트의 크기가 달라서 폰트가 로드된 이후에 image가 아래로 밀려나는 Layout Shift가 발생하고 있는 것을 확인할 수 있다.

두번째로는 구글폰트를 다운로드 하는 시점에 대한 것이다.
기존 next12를 보면 html 파일이 로드된 후, 이 파일이 link하고 있는 font.googleapis.com에서 폰트를 다운로드하고 있음을 확인할 수 있다.

기존 next12를 보면 html 파일이 로드된 후, 이 파일이 link하고 있는 font.googleapis.com에서 폰트를 다운로드하고 있을을 확인할 수 있다.

반면, Next13에서는 build타임에 미리 google font를 다운로드 하여서 로컬 디렉토리에 저장해두고, html파일이 이 로컬 파일을 link하도록 구현되었다. 이렇게 하면 서로 다른 도메인 간 Connection 연결을 위한 handshaking 과정 없이, 이미 HTML 파일을 다운로드 하기 위해 생성했던 Connection을 그대로 사용할 수 있기 때문에 전자보다 비교적 빠른 속도로 파일을 다운로드할 수 있다.
물론 Next.js 서버를 운영하는 쪽에서 적절하게 CDN을 사용해서 캐시정책을 설정해 주어야 할 것이다.

반면, Next13에서는 빌드 타임에 미리 구글 폰트를 다운로드 하여서 로컬 디렉토리에 저장해 두고, html 파일이 이 로컬 파일을 link 하도록 구현되어 있다. 이렇게 하면 서로 다른 도메인 간 Connection연결을 위한 handshaking 과정 없이, 이미 html 파일을 다운로드 하기 위해 생성했던 Connection을 그대로 사용할 수 있기 때문에 전자보다 비교적 빠른 속도로 파일을 다운로드 할 수 있다.

next 12 => html 파일이 로드된 후, 이 파일이 link하고 있는 font.gooleapis.com에서 폰트 다운로드

next 13 => build 타임에 미리 google font를 다운로드하여 로컬 디렉토리에 저장해 두고, html 파일이 이 로컬 파일을 linkgkehfhr
=> 서로 다른 도메인 간 Connection 연결을 위한 handshaking 과정 없이 생성했던 Connection을 그대로 사용할 수 있기 때문에

웹팩로더
=> 로더는 Next가 사용하기 위한 형태로 아래 같은 코드를 변환해 주는 역할
const homemadeApple = Homemade_Apple({subsets : ['latin'], weight : ['400'], display : 'swap' })

=> next 프로젝트의 webpack-config.ts파일을 보면 다음과 같이 next에서 사용하는 여러 로더들을 빌드 타임에 사용하고 있음을 알 수 있다. 우리에게 익숙한 next-swc-loader, next-image-loader등이 여기에 적혀 있고, 오늘 포스팅의 주제인 next-font-loader도 여기에 들어 있음을 확인할 수 있다.
이 loader string은 path.join을 통해 참조되며, 해당 path를 resolve하면 참조하게 된다.

next-font-loader는 다음과 같이 2개의 구성 요소로 구성되어 있다. 실제로 webpack loader가 참조하는 index.ts와 이 index.ts

nextFontLoader

- packages/font/src/google/loader.ts의 downloadGoogleFonts 함수를 호출해서 빌드 타임에 googleFont를 다운 받고 , zero-layout-shift를 위한 size-adjust를 진행하는 부분과 이 결과를 바탕으로 className을 만들고, 여기에 font-family, font-weight, font-style css를 적용하는 부분이다.

- 만약 Homemade Apple 폰트를 main tag에 적용한다면, className이 적용된다. > css 적 요소 , font-family, font-weight , font-style같은 것들

next-font-loader

- 2개의 구성 요소로 구성되어 있다.
- index.ts와 index.ts파일에서 참조하는 postcss-next.font.ts이다.

📍1. googleFont를 다운로드 받고, fallback font를 처리하는 단계

- nextFontLoader라는 함수에서 fontLoader라는 async함수를 호출함으로써 이 단계를 수행
- fontLoader라는 함수는 googleFont의 경우, pakages/font/google/loader.js를 의미, 이는 packages/font/src/google/loader.ts를 빌드한 결과물
- nextFontLoader에서 호출하는 fontLoader == packages/font/src/google/loader.ts의 downloadGoogleFonts

- 즉 nextFontLoader에서 fontLoader라는 함수를 호출하면 fallback font를 처리하는 데 그건 즉 구글 폰트를 다운 받는다는 뜻?

📍2. downloadGoogleFonts
(fallback font의 size-adjust를 수행하는 부분, 폰트를 다운로드 하는 부분, 그리고 결과를 생성하는 부분)

➡️ size-adjust

- 첫번째로 거치는 단계는 adjustFontFallbackMetrics를 계산하는 부분
- google-font-metrict.json이라는 Map을 불러와 fontFamily를 key로 준 값을 읽어온 후, 이 값을 calculateSizeAdjustVlaues에 넣어 size-adjust, line-gap등의 fallback font를 조정하기 위한 값을 계산하고 있음
- zero-layout-shift를 구현하기 위한 핵심 로직
- layout shift를 발생시킬 수 있는 size 차이를 비교해서 size-adjust 속성을 조정하는 방식

- next는 size-adjust를 수행하기 위해 필요한 값들을 자신들이 지정한 fallback font인 Times new Roman과 Arial에 대해 모두 기록해 놓고, 빌드 시에 이 값을 불러와 size-adjust 값을 계산한 뒤 사용하는 것

- calculateSizeAdjustValues = fontMetrics의 category 값이 'serif'이면 Times New Roman을, 'sans serif'이거나 'serif'가 아니면 Arial을 fallback으로 설정

➡️ download fonts

- fallback 폰트를 정하는 게 끝나면 이 폰트에 대해 zero-layout-shift를 구현하기 위한 size-adjust과정이 마무리 된 뒤에는 실제 Homemade Apple 폰트를 빌드 타임에 다운 받아
  .next/static/media 하위에 저장해야 한다.

- 이를 위해 먼저 Map 객체로 구성된 cssCache map에 해당 폰트에 대한 cache가 있는 지 먼저 확인해야 한다. 캐시가 없는 경우 fetch api를 사용해 직접 해당 폰트에 대한 css를 다운 받아온다.

- 폰트 파일을 받아온 이후, 이 파일을 로컬 디렉토리인 .next/static/media 하위에 저장 후, fontFaceDeclarations(@font-face css파일)에 google 도메인을 바라보고 있는 스트링 값들을 전부 방금 폰트 파일을 저장한 로컬 디렉터리를 바라보도록 수정해준다.

---

wrap-up
지금까지 downloadGoogleFonts 함수가 하는 역할에 대해 살펴보았습니다. 정리하면 다음과 같습니다. (아래의 모든 과정은 빌드 타임에 일어난다는 사실을 기억해 주세요)

사용자가 입력한 폰트를 key로 해서 하드코딩된 google-font-metrics.json파일의 JSON Map으로부터 Value를 읽어옴.
이 Value에는 해당 폰트의 카테고리(Serif, Sans Serif..), size-adjust 계산을 위한 여러 metric들이 들어 있음. 이 값들을 사용해서 사용자가 입력한 폰트와 fallback font의 사이즈를 조정해서 zero-layout-shift가 발생하지 않도록 맞춰줌.
다음으로는 실제로 폰트를 다운로드하는 단계. 먼저 @font-face가 정의된 css파일을 먼저 다운로드하고, 이 파일 안에 들어있는 실제 폰트 파일들 (woff2, woff)을 다운로드함. (이때 캐시가 있으면 캐시를 사용함.) 실제 폰트 파일을 로컬 파일 시스템에 저장한 뒤에 @font-face가 정의된 파일이 이 로컬 파일 시스템의 디렉터리를 가리키도록 String Replace를 수행함.
이 값을 리턴함.

---

📍 css 파일을 어떻게 className과 css에 바인딩을 하는가

- html 파일에 link로 들어가 있는 @font-face-css 파일은 postcssNextFontPlugin에 의해 생성된 것이다.
  생성된 css 파일은 로컬 파일 시스템에 다운된 googleFont를 가리키고, 이 css 파일 안에는 미리 계산된 size-adjust 같은 값들이 들어 있어서 zero-layout-shift를 가능하게 만드는 것이다.

---

지금까지 @next/font가 어떻게 구현되었는지를 살펴봄으로써, 어떻게 next가 font optimization을 내부적으로 수행하는지 살펴보았습니다. 핵심 아이디어를 정리하면 다음과 같습니다.

font optimization은 빌드 타임에 webpack custom loader를 통해 수행한다.
zero-layout-shift를 구현하기 위해 next는 Serif / Not Serif의 2가지 Default Fallback Font를 지정하고 있고(Times New Roman, Arial) 이 두 폰트에 대한 다른 모든 구글 폰트의 size-adjust 계산을 위한 값들이 하드코딩되어 있는 font-metrics map을 내부적으로 가지고 있다.
이 map을 사용해서 fallback 폰트와 사용자가 사용하려는 폰트 사이의 size-adjust를 수행해서 zero-layout-shift를 구현하고, 빌드 타임에 구글 폰트를 다운로드하여 로컬 디렉터리(. next/static/media)에 저장한다.
이제 @font-face가 포함된 css 파일을 생성해야 하는데, 이는 postcssNextFontPlugin에서 수행하며, fontFamily의 hash 값과 이전 단계에서 계산한 adjustFallbackFont의 여러 값을 css파일에 매핑한다.
이 css파일은 HTML의 head tag안에 존재하며, @font-face를 가리키는 css파일과, css파일이 가리키는 font 파일이 모두 local directory에 있기 때문에 Same-origin이며, 기존에 연결되어 있던 connection을 그대로 사용할 수 있다.

---

Next/Image의 컴포넌트 기능

- lazy loading
- 이미지 사이즈 최적화
- placeholder 제공

lazy loading : 이미지 로드하는 시점을 필요할 때까지 지연시키는 기술을 의미
