import TodoApi from "apis/todo.api";
import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  // 조회
  const getTodoList = async () => {
    try {
      const getTodo = await TodoApi.getTodo();
      setTodoList(getTodo.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  // 추가
  const addTodo = async (title, content) => {
    await TodoApi.addTodo(title, content);
    getTodoList();
  };

  // 삭제
  const deleteTodo = async (id) => {
    await TodoApi.deleteTodo(id);
    getTodoList();
  };

  // 수정
  const updateTodo = async (id, content, state) => {
    await TodoApi.updateTodo(id, { content, state });
    getTodoList();
  };

  return (
    <TodoContext.Provider
      value={{ todoList, getTodoList, addTodo, deleteTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
