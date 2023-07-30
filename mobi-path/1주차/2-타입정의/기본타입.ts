// 1) string
let firstname: string = "kim";

//  2) number
let num: number = 10;

// 3) boolean
let division: boolean = true;

// 4) array
let numArr: number[] = [1, 2, 3];

// 5) object
let obj: { name: string; age: number; hobbies: string[] } = {
  name: "박희수",
  age: 24,
  hobbies: ["movie", "book"],
};

// 6) any => 어떠한 타입도 허용하는 타입

let hi: any = "안녕";
let oe: any = "52";

let value2: number = 24;
// console.log(value2.length) => error, value2 타입이 array가 아니기 때문에 length가 존재하지 않는다.

let value: any = 10;
console.log(typeof value); // number => 타입을 확인해보면 number라고 뜬다.
console.log(value.length); // undefined any 타입을 사용하면 error가 발생하진 않는다.

// 7) unknown => any타입과 동일하게 모든 값을 허용하지만, any 타입과 다르게 프로퍼티 또는 연산을 하는 경우 컴파일러가 체크를 한다. 문제되는 코드 미리 예방 가능 

let unknownNum: unknown = 10;
let unknownvalue: unknown = "example";

// console.log(unknownNum.length); => error
// console.log(unknownvalue.length); => error
// unknown 타입은 엄격히 검사하기 때문에 any와 다르게 에러를 나타낸다.

// 조건문을 이용한 예시
if (typeof unknownNum === "number") {
  // console.log(unknownNum.length); => error
}

if (typeof unknownvalue === "string") {
  console.log(unknownvalue.length);
}

// 두 예시 모두 타입 검사는 정상적으로 되지만, unknownNum은 number타입이라 length 사용이 안된다.

// 8) enum => 여러 값들에 미리 이름을 정의하여 열거해 두고 사용하는 타입이다.

// Enum은 숫자 혹은 문자열 값 집합에 이름(Member)을 부여할 수 있는 타입으로, 값의 종류가 일정한 범위로 정해져 있는 경우 유용하다.

// 기본적으로 0부터 시작하며 1씩 증가한다.

enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Week.Mon); // 1
console.log(Week.Tue); // 2

// 수동적으로 값을 변경할 수 있으며, 값을 변경한 부분부터 다시 1씩 증가한다.
enum Week2 {
  Sun,
  Mon = 22,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

// console.log(Week.Mon) // 22
// conosl.elog(Week.Tue) // 23

// Enum 타입은 역방향 매핑을 지원한다.
console.log(Week["Mon"]); // 1
console.log(Week[1]); // 'Mon'
