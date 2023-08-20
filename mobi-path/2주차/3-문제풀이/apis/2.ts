import axios, { AxiosResponse } from "axios";
import { TodoDataBase } from "../types/todo";

export const TodoApi = {
  async getTodo(): Promise<TodoDataBase[]> {
    const res: AxiosResponse<TodoDataBase[]> = await axios.get("/");
    return res.data;
  },
};
