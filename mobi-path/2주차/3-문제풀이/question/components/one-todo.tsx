import { TodoDataBase, TodoEnum } from "../../types/todo";
// 목적 : 타입 가드를 이용하여 특정 타입에 따라 모든 경우에
// 안정적인 타입 환경에서 개발할 수 있도록 수정

// 타입가드 활용하여 todo.type에 따라 자동완성이 구현되도록 구현할 것.
// UI는 구현하지 않아도 된다.

// js는 풍부한 내부검사를 지원하지 않고, js객체를 사용할 때는 instanceof나 typeof와 같은 연산자를 액세스 할 수도 없다. 하지만 타입스크립트에서는 사용자 정의 타입가드 함수를 만들어 이를 해결할 수 있다. 사용자 정의 타입가드 함수란 단순히 '어떤 인자명은 어떤 타입이다'라는 값을 리턴하는 함수이다.
// 사용자 정의 타입 가드 사용
// 안정적인 타입 환경을 만들기 위해 각 타입마다

// parameterName is Type의 의미 : 매개변수가 해당 타입인지 구분하는 키워드

export function isDaily(
  item: TodoDataBase
): item is Extract<TodoDataBase, { type: TodoEnum.DAILY }> {
  return item.type === TodoEnum.DAILY;
}

export function isWeekly(
  item: TodoDataBase
): item is Extract<TodoDataBase, { type: TodoEnum.WEEKLY }> {
  return item.type === TodoEnum.WEEKLY;
}

export function isMonthly(
  item: TodoDataBase
): item is Extract<TodoDataBase, { type: TodoEnum.MONTHLY }> {
  return item.type === TodoEnum.MONTHLY;
}
type Types = {
  todo: TodoDataBase;
};
const OneTodo: React.FC<Types> = ({ todo }) => {
  if (isDaily(todo)) {
    return <div>{todo.title}</div>;
  } else if (isWeekly(todo)) {
    return <div>{todo.type}</div>;
  } else if (isMonthly(todo)) {
    return <div>{todo.goal}</div>;
  }
};
export default OneTodo;
