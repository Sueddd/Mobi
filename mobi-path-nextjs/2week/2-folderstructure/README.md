### 📍 요구사항

기존과는 다른 nextJS 폴더 구조 상상후, 페어와 소통하여 가장 좋은 폴더 구조 작성해보기

```
💫 구현 폴더

@component
- home --> loginform, signupform (toggle)
- todo --> onetodo, addTodo

@api
- home --> /user/sign-in, /user/sign-up
- todo --> /todo (crud)

@utils
- array-helper

@types
- todo
- user

@store(atoms)
- todo
```

### 🤩 개발 가치관

**✨ 개발 생산성**

- 도메인에 종속된 파일들은 도메인 바로 아래에 위치하도록 하여
- 파일을 왔다갔다 하지 않을 수 있도록 폴더 구조 생성

**✨ 체계적인 상태 관리**
- 상태를 서버 / 클라이언트로 구분
- 서버와 클라이언트 폴더를 분리함으로써 체계적인 상태 관리

#### 구현된 폴더 구조
```
> @app
    > @home
        > /_component
            > /loginform
                > loginform.tsx
            > /signupform
                > signupform.tsx
        > /_states
            > /client
                > .modal.atom.ts
            > /server
                > .user.api.ts
        > /_types
            > user.types.ts

    > @todo
        > /_component
            > /addTodo
                > addtodo.tsx
            > /oneTodo
                > onetodo.tsx
        > /_states
            > /client
                > todo.atom.ts
            > /server
                > todo.api.ts
        > /_types
            > todo.types.ts

    > @utils 
        > array_helper.ts
```