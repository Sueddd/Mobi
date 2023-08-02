// 제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것을 의미한다.

//※ 예제 1)
function basicText(text) {
  return text;
}

// 위 함수는 text라는 파라미터에 값을 넘겨 받아 text를 반환해준다.
// 어떤 값이 들어가더라도 그래도 반환한다.

basicText("hehe"); // 'hehe'
basicText(33); // 33
basicText(true); // true

// 매개변수를 그대로 반환하는 이런 형식을 제네릭 기법을 사용해 하나의 함수로 구현할 수 있다.
function genericeText<T>(text: T): T {
  return text;
}

// 제네릭 함수 구현 방법은 함수명 뒤에 <T>를 추가하여, T를 매개변수의 타입 또는 반환 타입으로 설정할 수 있다.
// 꼭 T로 작성할 필요는 없으며, T대신 다른 문자열을 사용해도 된다.
genericeText<string>("hehe");
genericeText<number>(10);
genericeText<boolean>(true);

// 위에서 만든 제네릭 함수를 호출하는 코드이다. 함수명뒤에 타입을 붙이고, 인수를 작성하는데 인수와 인수의 타입이 다를 경우 에러가 난다.

// 위에 작성한 제네릭 함수를 호출했을 때는 아래처럼 타입을 정의한 것과 같다.

// * function genericeText<string>(text : string) : string{
//     return text;
//   }

// 제네릭 타입이 <string>이 되는 이유는 getText()함수를 호출할 때 getText<string>()이렇게 넘기면, 함수를 호룿할 때 제네릭 값으로 string을 넘긴거와 같기 때문이다.

//※ 예제2)
function logText(text: string): string {
  return text;
}
// 위 코드는 인자를 하나 넘겨 받아 반환해주는 함수이다.
// 이 함수의 인자와 반환 값은 모두 string으로 지정되어 있지만 만약 여러 가지 타입을 허용하고 싶다면 any를 사용할 수 있다.

// any 사용
function anyText(text: any): any {
  return text;
}

// 이렇게 타입을 바꾼다고 해서 함수의 동작에 문제가 생기진 않는다. 다만, 함수의 인자로 어떤 타입이 들어갔고 어떤 값이 반환되는지 알 수가 없다.
// 왜냐? any라는 타입은 타입 검사를 하지 않기 때문이다.

// 이 문제점을 해결하는 게 제네릭이다.
// generic 사용

function genericText<T>(text: T): T {
  return text;
}

// 함수의 이름 바로 뒤에 <T>라는 코드 추가, 그리고 함수의 인자와 반환 값에 모두 T라는 타입추가.
// 이렇게 되면 함수를 호출할 때 넘긴 타입에 대해 타입스크립트 추정 가능
// 따라서 함수의 입력값에 대한 타입과 출력 값에 대한 타입이 동일한지 검증 가능

// 이렇게 선언한 함수는 아래와 같이 2가지 방법으로 호출 가능

// #1
const text = genericText<string>("Hello Generic");
// #2
const text2 = genericText("Hello Generic");

// 보통 #2 방법이 코드도 짧고 가독성이 좋아 흔히 사용하지만, 복잡한 코드에서 #2 방식으로 타입 추정이 되지 않는다면 #1 방법을 사용하면 된다.

// 위 함수에서 함수의 인자로 받은 값의 length를 확인하고 싶다면 어떻게 해야할까?
function genericText2<T>(text: T): T {
  //   console.log(text.length); > error발생
  return text;
}

// text에 length가 있다는 단서가 없기 때문에 에러가 발생한다.
// 왜냐하면, 인자에 number가 들어왔을 때도 length가 유효하진 않기 때문이다.

// 그래서 위코드를 수정해 보자면
function changeGeneric<T>(text: T[]): T[] {
  console.log(text.length);
  return text;
}

// 위 코드가 기존의 제네릭 코드와 다른 점은 인자의 T[] 부분이다. 이 제네릭 함수 코드는 일단 T라는 변수 타입을 받고, 인자 값으로는 배열 형태의 T를 받는다.

// ※ 예제3) > 제네릭 인터페이스

function expressText<T>(text: T): T {
  return text;
}

// #1
let str: <T>(text: T) => T = expressText;
// #2
let str2: { <T>(text: T): T } = expressText;

// 위의 코드는 제네릭 함수 expressText를 선언하고, expressText 함수를 타입으로 가지는 변수str을 선언하는 예시이다.
// let str : <T>(text:T) => T = logText;에서 str 변수는 제네릭 함수 타입을 갖는 것을 선언한다. 구체적으로는 T타입 매개변수를 가지고 T 타입 값을 인자로 받아 T타입을 반환하는 함수 타입이다. 이러한 함수 타입은 <T>(text:T) => T와 같이 선언된다.

// 위와 같은 변형 방식으로 제네릭 인터페이스 코드를 아래와 같이 작성할 수 있다.
interface GenericFn {
  <T>(text: T): T;
}

let myStirng: GenericFn = expressText;
