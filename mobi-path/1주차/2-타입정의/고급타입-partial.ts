// 파셜 타입은 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있습니다.
// 파셜 타입은 유틸리티 타입 중 하나이다.
// Partial은 전달받은 type의 모든 하위 집합을 나타내는 타입을 생성한다.

interface Address {
  email: string;
  address: string;
}

type MyEmail = Partial<Address>;
const me: MyEmail = {};
const you: MyEmail = { email: "ddddd" }; //가능
const all: MyEmail = { email: "noh552@gmail.com", address: "sokcho" }; // 가능

interface Address {
  email: string;
  address: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

function updateProductItem(productItem: Partial<Product>) {
  // Parial<Product>이 타입은 UpdateProduct 타입과 동일하다.
}

// 타입 생성
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// Partial을 이용해 타입 모든 요소를 옵셔널로 지정한 타입 새로 생성 가능
type partials = Partial<UserProfile>;

const User: partials = {
  username: "hehe",
};

// 타입 생성
interface Todo {
  title: string;
  description: string;
}

// todo : Todo 타입 가져옴, fieldsToUpdate : 파셜타입으로 가져옴
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

// Todo 타입 내의 속성 전부 사용
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
