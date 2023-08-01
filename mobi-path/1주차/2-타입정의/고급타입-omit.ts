// omit은 타입에서 특정 키를 기준으로 생략하여 타입을 내려주는 유틸리티 타입이다.

// 타입 생성
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createAt: number;
}

// description 속성 제외
type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createAt: 12332123,
};

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

type shopItem = Omit<Product, "stock">;

const apple: shopItem = {
  id: 1,
  name: "red apple",
  price: 2000,
  brand: "del",
};

// 여러개 타입을 제외할 때는 (multiple key) |를 쓴다.
const banana: Omit<Product, "stock" | "brand"> = {
  id: 1,
  name: "red banana",
  price: 1000,
};
