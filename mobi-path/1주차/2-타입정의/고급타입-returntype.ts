// ReturnType은 타입스크립트의 유틸리티 타입 중 하나이다.
// 리턴 타입을 사용하면 함수 표현식의 반환 값 타입을 추론할 수 있다.

function getName(): string {
  return "hehe";
}

// 이제 위의 함수를 ReturnType을 사용해 반환값 타입을 추론해보면
type NameType = ReturnType<typeof getName>;

// 이제 ReturnType으로 typeof getName의 반환 값을 추론하고 따라서 NameType은 string 타입으로 추론한다.
// 여기서 typeof getName은 함수 표현식이고, 이를 그냥 함수명만 적어주게 되면 함수명을 추론하기 때문에 꼭 함수 표현식으로 적어줘야 한다.

// 예시2)

function addNumber(a: number, b: number) {
  return a + b;
}

// addNumber의 리턴타입 정의
export type ReturnAddNumber = ReturnType<typeof addNumber>;
