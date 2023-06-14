import { useSelector } from "react-redux";
import OneTodo from "./one-todo";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todos);
  const { loading } = useSelector((state) => state.todo.addTodoState);

  if (loading) return <div>로딩중</div>;

  return (
    <>
      {todoList.map((todo) => (
        <OneTodo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

// 전역상태관리로 고려해 볼 경우
// - 부모 컴포넌트가 state를 알 필요 없을 때
// - props-drilling을 없애기 위해

export default TodoList;
