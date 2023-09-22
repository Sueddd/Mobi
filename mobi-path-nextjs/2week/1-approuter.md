## 📍 Next.js의 페이지 라우팅

```
리액트에서는 react-router-dom 라이브러리를 통해 페이지간 라우팅을 구현할 수 있었다. Next.js에서는 pages 폴더 안에 컴포넌트를 생성하면 자동으로 경로가 설정되게 된다.

➡️ 정적 라우팅
사전에 지정된 주소로 이동하는 방법,
react-router-dom처럼 넥스트에서도 Link 컴포넌트를 사용해 주소를 이동할 수 있다.

🖥️ 코드 예시
import Link from "next/Link";

export default function App() {
    return (
        <div>
            <h2>Link to "Main" Page</h2>
            <Link href = "/main"/></Link>
        </div>
    )
}

➡️ 동적 라우팅
대괄호[]로 파일명을 감싸면 해당 페이지는 동적으로 경로가 지정되는 페이지가 된다.
동적 페이지가 존재하는 경로에 임의의 주소를 대입하면 대입한 주소를 쿼리명으로 갖는 페이지로 이동할 수 있다.

📁 파일 구조 예시
/pages
    index.tsx
     -- /product
        -- [name].tsx


🖥️ 코드 예시
import Link from "next/Link";

export default function App() {
    return (
        <div>
            <h2>Link to "Sub" Page</h2>
            <Link href = "/product/apple"></Link>
        </div>
    )
}

➡️ 라우터 객체
next/router 모듈에서 useRouter 훅을 불러와 라우터 객체를 사용할 수 있다.

📌 router설정을 해주면, 동적으로 지정한 값이 쿼리에 들어가게 된다.
만약, [name].jsx 페이지를 만들고 apple이라는 동적 경로를 사용하면 {name : "apple"}이라는 쿼리를 확인할 수 있다.

🖥️ 코드 예시
import {useRouter} from "next/router";

export default function App() {
    const router = useRouter();
    return (
        <div>
            <h2>Link to apple Page</h2>
            <button onClick = {() => router.push("/apple")}></button>
        </div>
    )
}
```

## Next.js의 앱 라우팅

📍 버전 13에서부터는 공유 레이아웃, 중첩된 라우팅, 로딩 상태, 에러 핸들링 등을 지원하는 새로운 앱 라우터를 소개했다.

```
1. React Server Component를 기반으로 한다.

2. Streaming과 Suspense
➡️ 페이지의 html을 작은 단위로 쪼개고, 점진적으로 작은 부분들을 서버에서 클라이언트로 전달한다. 즉, 전체 데이터 패칭을 기다리지 않아도 되고, 화면에 페이지가 더 빨리 나온다.
TTFB, FCP 시간을 단축하고 TTI를 개선해주는 효과가 있다.

3. Nested Routes와 Layouts
- Layouts : UI를 여러 개의 페이지에서 쉽게 공유할 수 있게 해준다.

- Roure Groups : url에 영향을 주지 않으며 route를 구성할 수 있도록 한다. 특정 route들에 각각 다른 layout를 적용할 때 활용 가능하다.

- Loading UI : 의미 있는 loading state를 만들 수 있다.

- Intercepting Routes : 현재 layout 안에서 현재 페이지의 context를 유지하며 route를 로드하는 것을 도와준다.

4. Built-in SEO
새로운 Metadata API를 활용하여 SEO 개선이 가능하다.

5. Server Actions
클라이언트 쪽에서 서버 쪽 변화를 직접적으로 다룰 수 있다. use server directive를 통해 Server Action임을 나타낸다.

app 디렉토리
App Router는 app 이라 불리는 새로운 디렉토리에서 동작한다.
현재는 Pages Router에서 App Router로 점진적인 변경을 지원하기 위해 pages 디렉토리와 함께 사용이 가능하다.

default로 app 디렉토리 내의 모든 컴포넌트는 RSC 이다.
```

## 📁 File Convention

next.js에서는 특정 기능을 하는 UI를 만들기 위한 special files를 제공한다.

![image (2)](https://github.com/Sueddd/Mobi/assets/111338578/7128675d-d2b3-499f-8475-2fe8e45f203b)

```
- page.js : 접근 가능한 경로를 만들고 라우터의 유니크한 ui를 만든다
    - route.js : 라우트의 앤드포인트를 만든다.

- layout.js : segment와 이들의 자식들이 공유하는 ui를 만든다. layout은 page 또는 segment를 감싼다.
    - template.js : 새 컴포넌트 인스턴스가 네비게이션시 마운트가 되는데, 이를 제외하면 layout.js와 유사하다.

- loading.js : segment와 이들의 자식을 위해 loading UI를 만든다. loading.js는 page또는 자식 segment를 React Suspense Boundary로 감싼다. 그들이 로드 상태일 때 loading UI를 보여준다.

- error.js : segment와 이들의 자식을 위해 error UI를 만든다. error.js는 page또는 자식 segment를 React Error Boundary로 감싼다. error가 잡히면 error UI를 보여준다.

- not-found.js : route segment나 url이 어떠한 라우트와도 매치되지 않으면 보여줄 UI를 만든다.

Colocation
특별한 파일 외에도, app디렉토리 내의 폴더 내에 사용자 파일을 배치할 선택의 여부가 있다.

이는 폴더가 라우트를 정의하는 반면, page.js 또는 route.js에서 반환된 내용만이 공개적으로 접근 가능하기 때문이다.
```

## 🧭 서버 중심 라우팅과 클라이언트 측 네비게이션

```
페이지 디렉토리는 클라이언트 측 라우팅을 사용하는 반면, 앱 디렉토리는 서버 에서의 데이터 가져오기에 맞춰 '서버 중심 라우팅'을 사용한다.

서버 중심 라우팅을 사용하면?
➡️ 클라이언트가 라우트 맵 다운 받을 필요 x
➡️ 서버 중심이라도 Link 컴포넌트를 사용한 클라이언트 측 네비게이션 사용
➡️ 새로운 라우트로 이동할 때 브라우저가 페이지를 다시 로드 하지 않음
➡️ 이동시 url이 업데이트 되고, Next.js는 변경되는 세그먼트만을 렌더링
➡️ 앱 주변 이동에 따라 라우터는 React 서버 컴포넌트 페이로드의 결과를 클라이언트 측 메모리 캐시에 저장, 리액트의 동시 렌더링 간 일관성 보장, 이전에 가져온 세그먼트의 캐시 재사용 가능
```

## 🤔 앱라우터와 페이지 라우터의 차이점

```
1.
기존의 페이지 라우터는 여러 layout을 compose할 수 없었다. 그러나 앱 라우터에서는 각 layout을 compose 할 수 있다.

2.
페이지 라우터에서는 data fetching과 component를 함께 배치할 수 없었지만, 앱 라우터는 data fetching가 동시에 가능해졌다.

3.
페이지 라우터에서는 next/router로부터 useRouter를 가져와야 하고, 앱라우터에서는 next/navigation으로부터 useRouter를 가져와야 한다.
또한 pathname, query와 관련된 기능은 usePathname, useSearchParams로 분리되었다.

4.
앱라우터에서는 클라이언트 사이드 네비게이션과 함께 서버중심의 라우팅을 사용하고, 즉각적인 로딩 상태와 동시성 렌더링을 지원한다.
=> 이는 navigation이 client 측 상태를 유지하고, 값비싼 렌더링을 피하며 is interruptible, race condition에 빠지지 않는다는 것을 의미한다.

5.
앱 라우터에는 서버 컴포넌트의 렌더링된 결과를 저장하는 in-memory client-side chache가 있다. 캐시는 모든 수준에서 무효화를 허용, 동시 렌더링에서 일관성을 보장하는 route segment로 분할된다.
또한 특정 경우 서버에 새요청을 하는 대신 캐시를 다시 사용하는 것이 가능하다 => 불필요한 렌더링 방지

6. 앱라우터는 서버컴포넌트로 구성되있고, 이로 인해 번들 사이즈가 감소하게 되었다.
```

## 🦾 multiple root layouts

```
여러 개의 root layouts를 만드려면, 최상위의 layout.js 파일을 지우고, 각 라우트 그룹에 layout.js파일을 추가한다. 이는 앱이 완전히 다룬 UI 또는 경험을 가진 섹션으로 분할하는 데 유용하다.
```
