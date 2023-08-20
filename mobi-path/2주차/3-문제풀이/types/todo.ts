
export enum TodoEnum {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}

// 세가지 객체 타입 중 하나 포함 가능
export type TodoDataBase =
  | {
      type: TodoEnum.DAILY;
      content: string;
      title: string;
    }
  | {
      type: TodoEnum.WEEKLY;
      total: Date;
    }
  | {
      type: TodoEnum.MONTHLY;
      goal: string;
    };

// TodoEnum 타입 중 하나를 입력 받아 그에 해당하는 TodoDataBase의 타입만을 추출
export type TodoType<T extends TodoEnum = TodoEnum> = Extract<
  TodoDataBase,
  { type: T }
>;
// TodoDataBase의 객체 타입중 type이라는 속성이 내가 보낸 파라미터와 일치하는
// 파라미터 이름은 T라고 설정해둠
