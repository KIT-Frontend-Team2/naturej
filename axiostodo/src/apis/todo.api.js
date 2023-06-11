import { axiosInstance } from "./core";

const PATH = "/todo";
// TodoList API
const TodoApi = {
  getTodo() {
    return axiosInstance.get(PATH);
  },
  addTodo(title, content) {
    return axiosInstance.post(PATH, { title, content });
  },
  updateTodo(id, { content, state }) {
    return axiosInstance.put(`${PATH}/${id}`, { content, state });
  },
  deleteTodo(id) {
    return axiosInstance.delete(`${PATH}/${id}`);
  },
};

export default TodoApi;
