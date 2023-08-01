// pick 타입은 특정 타입에서 몇 개의 속성을 선택하여 타입을 정의한다.
// pick은 유틸리티 타입 중 하나이다.

// ex)
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// Product 타입의 속성중 id, name, price만 가져옴
type shoppingItem = Pick<Product, "id" | "name" | "price">;

// 상품의 상세정보 Product의 일부 속성만 가져옴
function displayProductDetail(shoppingItem: shoppingItem) {}

// 타입 정의
interface User {
  id: number;
  name: string;
  hobby: string;
  age: number;
}

// User의 일부 속성만 가져와 타입으로 정의
type UserInfo = Pick<User, "id" | "name" | "age">;
