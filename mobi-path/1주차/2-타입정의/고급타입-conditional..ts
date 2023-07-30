type X = number;
type U = number;
type Y = number;

// T가 U에 할당될 수 있으면 타입은 X가 되고 그렇지 않다면 타입이 Y가 된다는 것을 뜻한다.
type Conditional<T> = T extends U ? X : Y;

// 새로운 Type에 Conditional 타입을 사용해서 U를 주면 Type은 X가 된다.
// Conditional<T>가 U에 할당된다면 X가 되는것인데, 그렇다면 U는 X인듯
// 그래서 Type은 X가 된다.
type Type = Conditional<U>;

// 조건부 타입 T extends U ? X : Y는 X나 Y로 결정되거나, 혹은 지연된다.

// 왜냐하면 조건이 하나 혹은 그 이상의 타입 변수에 의존하기 때문
// T나 U가 타입 변수를 포함할 대, X또는 Y로 결정되거나 지연될지,
// 타입 시스템이 T가 항상 U에 할당할 수 있는지에 대해 충분히 정보를 가지고 있는지 여부로 결정된다.

type User = {
  uid: number;
  account: string;
  isVerified: boolean;
};

type Guest = {
  name: string;
};

// function createUser(id: number): User;
// function createUser(name: string): Guest;
// function createUser(nameOrid: number | string): Guest | User;

type GuestOrUser<T extends number | string> = T extends number ? User : Guest;

const gusetInfo:GuestOrUser<'guest'> = {name :"Guest"};
