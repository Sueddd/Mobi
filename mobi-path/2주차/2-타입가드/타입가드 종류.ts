// 타입 가드 종류의 예시를 들어보고, 얻을 수 있는 장점을 코드로 구현해 보세요.

// 타입 가드를 사용하면 조건문에서 객체의 타입을 좁혀나갈 수 있다.

// 타입스크립트는 instanceof, typeof 연산자를 이해할 수 있다.
// 1. typeof

function doSomethig(x: number | string) {
  // 해당 조건문 블록 내에 해당 변수의 타입이 다르다는 것 인지
  if (typeof x === "string") {
    console.log(x);
  }
}

// 2. instanceof
class Foo {
  foo = 123;
  common = "123";
}

class Bar {
  bar = 123;
  common = "123";
}

function exam1(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo);
    // console.log(arg.bar); // error > Foo라는 instance는 bar를 포함하지 않음
  }
}

// 3. in

// in은 객체 내부에 특정 프로퍼티가 존재하는지를 확인하는 연산자.

interface A {
  x: number;
}

interface B {
  y: string;
}

function exam2(q: A | B) {
  if ("x" in q) {
    // x가 q안의 포함인지
    console.log("yes");
  } else {
    console.log("no");
  }
}

// 4. 리터럴 타입가드
// 리터럴 값의 경우 === , ==, !==, != 연산자를 사용해 타입을 구분 가능

type TriState = "yes" | "no" | "unknown";

function logOutState(state: TriState) {
  if (state == "yes") {
    console.log("yes");
  } else if (state == "no") {
    console.log("no");
  } else {
    console.log("cannot");
  }
}

// 5. 사용자 정의 타입가드
// js는 풍부한 내부검사를 지원하지 않고, js객체를 사용할 때는 instanceof나 typeof와 같은 연산자를 액세스 할 수도 없다. 하지만 타입스크립트에서는 사용자 정의 타입가드 함수를 만들어 이를 해결할 수 있다. 사용자 정의 타입가드 함수란 단순히 '어떤 인자명은 어떤 타입이다'라는 값을 리턴하는 함수이다.

interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}

// 사용자 정의 타입가드
function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

// 사용자 정의  타입가드 사용

function exam3(arg: Foo | Bar) {
  if (isFoo(arg)) {
    console.log(arg.foo);
    // console.log(arg.bar); // error
  }
}
exam3({ foo: 123, common: "123" });
