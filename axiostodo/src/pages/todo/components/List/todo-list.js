import OneTodo from "./one-todo";
import TodoApi from "apis/todo.api";

const TodoList = ({ todoList, setTodoList }) => {
  // 수정
  const updateTodo = async (id, title, content, state) => {
    try {
      await TodoApi.updateTodo(id, { content, state });
      const getTodo = await TodoApi.getTodo();
      setTodoList(getTodo.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  // 삭제
  const deleteTodo = async (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        await TodoApi.deleteTodo(id);
        const getTodo = await TodoApi.getTodo();
        setTodoList(getTodo.data.data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  // 완료
  const completeTodo = (id, state) => {
    const _todoList = [...todoList];
    const todo = _todoList.find((todo) => todo.id === id);
    todo.state = !state;
    setTodoList(_todoList);
  };

  return (
    <>
      {todoList.map((todo) => (
        <OneTodo
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ))}
    </>
  );
};
export default TodoList;
