// built on
App Router 
- 서버 중심 라우팅 
- react server components를 기반으로 구축되어 있다. 
- 서버 데이터 가져오기에 맞춰져 있다. 
- 하지만 경로 이동시 페이지를 다시 렌더링하지 않고, SPA처럼 URL만 업데이트 하고 next는 변경된 세그먼트만 렌더링한다. 

Page Router
- 클라이언트 중심 라우팅 

// loaction 
App Router
- app 디렉토리를 사용한다. 
- app 하위에 모든 파일을 함께 구성할 수 있다. 
    - 디렉토리로 경로를 정의
    - 페이지를 위한 파일은 page.js
    - sever-side API를 위한 파일은 route.js
- pages router 보다 우선 순위가 높다. 

// Layout 
App Router 
app 디렉토리 내에 root layout을 필수로 포함해야 한다. 
root layout 뿐 아니라 각 layout를 compose 할 수 있다. 
데이터 패칭 또한 동시에 가능하다. 

Pages Router 
전역 공유 layout을 지정하기 위해 _app을 사용한다. 
단 여러 layout를 compose할 수 없다. 
data fetching과 component를 함께 배치할 수 없다. 

렌더링은 작성한 코드를 사용자 인터페이스로 변환하는 것이다. 
next는 기본적으로 모든 경로의 페이지에 대한 html파일을 사전 렌더링한다. 
브라우저에서 해당 페이지 경로에 접근하면, 사전 렌더링된 html과 연결된 최소한의 js파일이 전달되고 브라우저에서 js가 실행되면서 페이지와 완전히 상호작용한다. 

브라우저에서 해당 페이지 경로에 접근하면, 사전 렌더링된 html과 연결된 최소한의 js 파일이 전달되고 브라우저에서 js가 실행되면서 페이지와 완전히 상호작용 한다.

next는 모든 경로의 페이지에 대한 html파일을 사전 렌더링한다. 
브라우저에서 해당 페이지 경로에 접근하면, 사전 렌더링된  html과 연결된 최소한의 js파일이 전달되고 브라우저에서 js가 실행되면서 페이지와 완전히 상호작용 한다. 

브라우저에서 해당 페이지 경로에 접근하면, 사전 렌더링된 html과 연결된 최소한의 js파일이 전달되고 브라우저에서 js가 실행되면서 페이지와 완전히 상호작용 한다. 

