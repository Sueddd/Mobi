// as const
// 타입스크립트에서 변수를 const로 선언할 때와 let으로 선언할 때는 타입 추론이 다르게 일어난다.

// as const를 붙이면 Primitive Type을 Literal Type으로 지정해주는 것이다.
// primitive = 값의 정보를 저장 > 실제 값을 저장하는 게 아님
// literal = 값 자체가 변하지 않는 값 > 실제 값을 저장

// ex)
let a = "hehe"; // let a : string
const b = "hehe"; // const b : "hi"

// ** 타입스크립트는 string literal type을 지원하여 특정 문자열 자체를 타입으로 다룰 수 있다. const로 선언한 변수는 위와 같이 string이라는 넓은 범위의 타입 대신 구체적으로 딱 하나의 문자열인 "hehe"를 가리키게 된다. > 즉 const로 선언하면 범위를 구체적으로 좁히는 것

// 이는 number 타입도 마찬가지
let ab = 1; // let a : number
const bc = 1; // const b : 1

// ** 이런 차이가 발생하는 이유는 ?
// let은 변수의 값을 언제든 바꿀 수 있고, const는 특성 상 변경할 수 없기 때문에 그렇다. 그래서 let의 경우 포괄적인 개념의 primitive로 값을 추론하고, const의 경우 변경 불가능하기 때문에 literaltype인 타입스크립트로 추론하는 것.

// 그러나, 배열이나 객체의 경우에는 const로 선언하여도 문자열이나 숫자처럼 구체적으로 범위를 좁히지 않는다.
// object 내부의 값들은 언제든 바꿀 수 있다.

// ex)
const abc = [1, "hehe"]; // const a : (string | number)[] > 범위 안좁혀짐
const bcd = {
  num: 1,
  str: "hi",
};
// const b : {num : number; str : string}; > const로 선언해도 범위 안좁혀짐

// 이를 우리는 const as를 활용해 범위를 좁힐 수 있다.
const abcd = [1, "hehe"] as const; // const abcd : readonly[1, 'hehe']
const bcde = {
  num: 1,
  str: "hehe",
} as const;
// const b : {readonly num :1, readonly str : "hehe"}

// 변수 선언문 뒤에 as const를 추가하거나 리터럴 앞에 <const>를 붙이면 이는 적용된다.

// let으로 선언한 변수도 뒤에 as const를 붙여서 동일하게 적용 가능하다.
// ex)
let ac = "hehe" as const; // let ac : 'hehe' > let으로 선언했는데도 범위 좁혀짐
let bd = 1 as const; // let bd : 1
