## 1. 🤔 Next.js를 쓰면 무조건 SSR 방식을 사용하고 있는 것일까?

- Next.js는 이미 CSR을 지원하고 기본적으로 설정되어 있다. 따라서 별도의 설정 없이도 자동으로 사용된다.
- SSR이나 SSG를 사용하려면 getServerSideProps 또는 getStaticProps 등의 메서드를 이요해 서버에서 데이터를 가져와야 한다.

## 2. 😊 Next.js12의 SSR

- SSR은 사용자가 서비스에 접속해 서버로 요청을 보내는 경우, 서버에서 렌더링을 진행하고 렌더링 된 페이지를 클라이언트로 보낸다. 사용자가 매번 요청을 보낼 때마다 서버에서 렌더링 과정을 거치게 된다.
- 이런 과정은 사용자의 요청에 따라 특정 데이터들이 빈번하게 변경이 일어나는 경우 유용하다.

Next.js에서 SSR 구현해보기

```
Next.js에서 SSR을 구현할 때는 getServerSideProps 함수를 정의해 사용할 수 있다.
일반적인 컴포넌트가 아닌 페이지 파일에서 정의할 수 있다.

🖥️

// 페이지 컴포넌트 외부에 함수 선언
export async function getServerSideProps() {
    const response = await fetch('http://...');
    const jsonData = await response.json();

    return {
        props : {jsonData}
    }
}

// 페이지 컴포넌트에서 props로 넘겨 받아 데이터 사용 가능
function IndexPage({jsonData}) {

}
```

## 3. 😊 Next.js12의 SSG

- SSG(Static Site Generation)는 정적 페이지를 생성하는 것으로 빌드하는 과정에서 페이지를 생성하게 된다.
- 이후 사용자들이 해당 페이지를 요청하는 경우에 서버는 이미 생성된 정적 페이지를 제공한다.
- 페이지에 구성된 데이터들이 변하지 않는 경우 유용하다.

Next.js에서 SSG 구현해보기

```
SSR과 유사하게 GetStaticProps 함수를 이용하여 SSG를 구성할 수 있다.

🖥️
export async function getStaticProps() {
    const response = await fetch('https://...');
    const jsonData = await response.json();

    return {
        props : {jsonData}
    }
}

function StaticPage({ jsonData }){
    // ...

    return ...
}
```

## 4. 😊 Next.js12의 ISR

- SSG는 빌드시에만 정적 페이지를 생성하는 특징이 있다.
- 그러나 ISR을 이용하면 빌드시에만 생성하는 것이 아니라 특정 시간 마다 정적 페이지를 재생성 할 수 있다.

```
getStaticProps의 반환값으로 revalidate 값을 주면 해당 시간마다 정적 페이지에 필요한 데이터를 업데이트하여 재생성 한다.

🖥️
export astync function getStaticProps(){
    const response = await fetch('http://...');
    const jsonData = await reponse.json();

    return{
        props : {
            jsonData
        },
        revalidate : 100
    }
}
```

# Next.js13에서의 변화

```
🖥️
getStaticProps와 비슷하고, 이는 직접 무효화 하기 전까지는 캐싱된다.
fetch(URL, {cache: 'force-cache'});

매번 요청때마다 refetch되고, getServerSideProps와 비슷하다.
fetch(URL, {cache: 'no-store'});

getStaticProps에 revalidate옵션을 준 것과 비슷하다. 10초동안 캐싱된다.
fetch(URL, {next : {revalidate:10}});
```

```
🌟 SSG
Next.js 안에는 기본 값으로 내장되어 있기 때문에 설정해주지 않아도 빌드된 시점에서 데이터 fetch를 해준다.

🌟 SSR
async function fetchData(params : {id: string}) {
    const res = await fetch(
        `http....`,
        {cahe : 'no-store'},
    )
    const data = await res.json();
    return data;
}

🌟 ISR
async function fetchData(params : {id: string}) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`,
        { next : {revalidate : 15}},
    );
    const data = await res.json();
    return data;

}
```

- 이 방식이 가능해진 이유는 서버 컴포넌트와 클라이언트 컴포넌트가 나뉘었기 때문이다.

## axios 방식을 사용한 SSG, SSR, ISR

실습 해보고 난 후 정리 예정
