// type alias (타입 별칭)
// type alias는 type 키워드를 사용하여 타입에 이름을 설정하는 방법이다.
// 타입 별칭을 정의하는 방법은 type 뒤에 별칭을 입력하고 =연산자 뒤에 타입을 정의한다.

// 공식)
// type 별칭 = 타입;

// ex1)

// Name이라는 타입은 반드시 string 이어야 한다.
type Name = string;
// Age라는 타입은 반드시 number이어야 한다.
type Age = number;

// Name이라는 변수는 string 타입을 가져야 한다.
let Name: Name = "Tom";
// age라는 변수는 number 타입을 가져야 한다.
let age: Age = 20;

// ex2) 객체에서 사용

// 기존에 객체를 생성할 때
const tomPerson: { name: string; age: number; isDeath: boolean } = {
  name: "Tom",
  age: 20,
  isDeath: false,
};

// type alias를 사용할 때
type Person = {
  name: string;
  age: number;
  isDeath: boolean;
};

// Person이라는 타입 사용
const changePerson: Person = {
  name: "Tom",
  age: 20,
  isDeath: false,
};

// Person이라는 타입 사용2
const changePerson2: Person = {
  name: "hehe",
  age: 23,
  isDeath: false,
};

// ex3) 함수에 사용
// 함수에도 타입 별칭을 사용 가능

// 기존 함수, name과 age라는 인수를 갖고 string을 반환
const stringFunc = (name: string, age: number): string => {
  return `name : ${name} / age : ${age}`;
};

// 함수 타입 지정, 인수 두개와 string 반환하는 타입
type StringFunc = (name: string, age: number) => string;

// StringFunc라는 타입을 가짐
const changeFunc: StringFunc = (name, age) => {
  return `name : ${name} / age : ${age}`;
};
