// Conditional Types는 특정 조건에 따라 타입을 결정하는 기능이다.
// 이를 통해 더욱 유연한 타입 변환을 수행하고, 복잡한 타입 관계를 다룰 수 있다.

// 조건부 타입 기본 개념
// 조건부 타입은 조건식과 참일 때의 타입, 거짓일 때의 타입을 지정하여 작성한다.
// 조건부 타입은 다음과 같은 구문으로 작성된다.

// 예시1 )
// type ConditionalType<T> = T extends SomType ? TrueType : FalseType;
// T가 SomeType에 포함된다면 ConditionalType<T>는 TrueType을 갖게되고, 아니면 FalseType을 갖게된다.

// 예시 2)
// type UnwrapPromise<T>는 제공된 타입 T가 Promise로 랩핑된 타입
// UnwrapPromise<T>는 타입 T가 Promise인 경우 반환값의 타입을 추출, 그렇지 않으면 T를 그대로 반환
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// fetchData라는 함수의 리턴값은 Promise이고 그 중에서도 string 타입을 리턴
function fetchData(): Promise<string> {
  return Promise.resolve("Hello, TypeScript");
}

// Return Type<typeof fetchData>는 fetchData함수의 반환 타입을 추론하기 위해 typeof 연산자 사용
// UnwrapPromise 호출은 Return Type<typeof fetchData>의 반환값을 언랩하는 것을 명시
// 언랩이란? promise객체에 래핑되어 있는 값을 추출하여 내부 값을 반환하는 것이다.
type ResponseTyped = UnwrapPromise<ReturnType<typeof fetchData>>;
