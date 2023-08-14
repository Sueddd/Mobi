// todo[]를 map으로 순회하여 OneTodo 컴포넌트들을 랜더링 할

import OneTodo from "./components/one-todo";
import { TodoDataBase } from "../types/todo";

type Types = {
  todo: TodoDataBase[];
};

// 상위 컴포넌트라고 생각하면 된다.
const Q1Component: React.FC<Types> = ({ todo }) => {
  return (
    <>
      {todo.map((v) => (
        <OneTodo todo={v} />
      ))}
    </>
  );
};

export default Q1Component;
