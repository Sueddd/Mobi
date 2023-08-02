// satisfies는 업캐스팅(up-casting)으로 type-safety를 보장한다.
// 업캐스팅이란 부모-자식 상속관계의 클래스가 있을 때 부모 -> 자식 방향의 형변환을 다운 캐스팅, 자식-> 부모 방향의 형변환을 업캐스팅이라 한다.

// 1. as 대신 satisfies

// satisfies라는 키워드는 타입스크립트 4.9 버전에서 등장하는 새로운 키워드이다.
// 이는 타입을 선언할 때 사용하는 키워드이다.
// as 키워드 또한 타입을 선언할 때 사용되는 키워드이지만 이는 자칫 잘못 이용하면
// 상당히 위험할 수 있는 키워드이다.

type Person = {
  name: string;
  age: number;
  hobby: string;
};

//가장 많이 사용하는 경우 > name, age, hobby 중 하나라도 정확하지 않은 타입을 가지거나 빠져있으면 에러를 나타냄
const per1: Person = {
  name: "John",
  age: 20,
  hobby: "computer game",
};

// as 키워드를 사용하여 Person이라는 타입 지정, 원하는 속성만 지정 가능
// 별다른 에러를 보여주지 않지만, 이는 실제로 코드가 작동할 때 예상치 못한 에러 발생 시킬 확률이 있음
const per2 = {
  name: "Max",
  age: 22,
} as Person;

// satisfies라는 키워드 사용, per1과 같이 꼭 필요한 값이 하나라도 빠져있으면 에러 발생
const per3 = {
  name: "Kai",
  age: 25,
  hobby: "baseball",
} satisfies Person;

