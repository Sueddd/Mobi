next-js에서는 react-router-dom과 같이 개발자가 직접 라우팅을 연결하지 않아도 괜찮습니다
그렇다면, 어떠한 방식으로 라우팅을 지원하고 있으며 params와 qurey-string과 같은 데이터를 전달받기 위해서 지원하는 hooks에 대하여도 알아봅시다

## 1. Next.js의 폴더 디렉토리 구조

<img src = "https://miriya.net/blog/cliz752zc000lwb86y5gtxstu"></img>

- Next.js의 경우 path를 따로 설정하지 않는다.
- /pages 혹은 /src/pages 폴더 내의 폴더명, 파일명에 맞춰서 자동으로 path가 설정 된다.
- 동적 라우팅의 경우, 파일명이나 폴더명을 []대괄호로 감싸주면 된다.
