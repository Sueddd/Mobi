// interface
// 인터페이스는 다른 타입들의 특성을 정의하는 것이다.

// ex)
// Person 인터페이스는 이 세가지 속성이 있어야 한다는 것을 나타낸다.
// 해당 인터페이스에 맞는 객체만 해당 인터페이스로 타입 선언이 가능하다.
interface MakePerson {
  firstName: string;
  lastName: string;
  age: number;
}
const person: MakePerson = {
  firstName: "Jane",
  lastName: "doe",
  age: 25,
};

// 근데 이는 type alias를 활용해서도 똑같이 만들 수 있다.

type ChangePerson = {
  firstName: string;
  lastName: string;
  age: number;
};

//---------------------------------------------------------------------------

// 타입스크립트 사용자들은 interface는 type alias와의 차이점을 많이 찾아본다고 한다.
// 이는 type alias는 interface가 하는 것들을 거의 다 대체 할 있는 것처럼 보이기 때문이다.
// type alias와 interface 둘 다 타입에 이름을 부여해주는 것이지만, type alias는 모든 타입에 이름을 달아줄 수 있지만, interface는 오직 객체 타입에만 가능하다.
// 이것이 type alias와 interface의 가장 명확한 차이일 것이다.

// 또한 type alias는 새로운 프로퍼티에 열려있지 않고, interface는 항상 열려있다.

// 두 가지 방법은 타입에 대해 확장할 때 다르게 표현
// ex)
// type 확장
type User = {
  name: string;
};
type Player = User & {
  age: number;
};

// interface 확장
interface InterfaceUser {
  name: string;
}
interface InterPlayer extends InterfaceUser {
  age: number;
}

// Player, InterPlayer 타입은 name, age 키를 갖는 결과는 동일하다.

//---------------------------------------------------------------------------

// interface가 가지는 장점으로는 동일한 이름의 interface를 작성하여 property를 누적해서 사용할 수 있다는 점이다.
interface Favorite {
  first: string;
}
interface Favorite {
  second: number;
}
interface Favorite {
  third: string;
}

// Favorite이라는 타입은 first, second, third라는 키를 갖게 된다.
const Fav: Favorite = {
  first: "hehe",
  second: 24,
  third: "food",
};
