import axios from "axios";
import { TodoDataBase, TodoEnum, TodoType } from "../types/todo";

// 인터페이스 MakeApi는 TodoType을 상속 받는다.
interface MakeApi {
  data: TodoDataBase[];
}

export const TodoApi = {
  // getTodo 함수는 MakeApi 타입의 프로미스를 반환한다.
  async getTodo(): Promise<MakeApi> {
    const res = await axios.get<MakeApi>("/");
    return res.data;
  },
};
