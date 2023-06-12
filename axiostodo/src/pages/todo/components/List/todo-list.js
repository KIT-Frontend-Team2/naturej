import { useTodo } from "contexts/todo.ctx";
import OneTodo from "./one-todo";

const TodoList = () => {
  const { todoList } = useTodo();

  return (
    <>
      {todoList.map((todo) => (
        <OneTodo key={todo.id} todo={todo} />
      ))}
    </>
  );
};
export default TodoList;
