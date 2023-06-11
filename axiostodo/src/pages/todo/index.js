import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import BasicButton from "@components/Button/Button";
import { flexAlignCenter, flexCenter } from "@styles/common";
import TodoAddModal from "./components/Modal/add-modal";
import TodoList from "./components/List/todo-list";

const TodoPage = () => {
  // 모달창 띄울건지 관리하는 state 변수
  const [isAddTodoModal, setIsAddTodoModal] = useState(false);
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "example1",
      content: "content1",
      state: false,
    },
    {
      id: 2,
      title: "example2",
      content: "content2",
      state: false,
    },
    {
      id: 3,
      title: "example3",
      content: "content3",
      state: false,
    },
  ]);

  const addTodo = (title, content) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        const newTodo = {
          id: Math.floor(Math.random() * 100000),
          state: false,
          title,
          content,
        };
        resolve(newTodo);
      }, 1000)
    ).then((todo) => {
      setTodoList([todo, ...todoList]);
      setIsAddTodoModal(false);
    });
  };

  const showTodoToastMessage = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;

    toast.promise(addTodo(title, content), {
      pending: "TODO LOADING",
      success: "TODO SUCCESS",
      error: "TODO ERROR",
    });
  };

  const handelOpenTodoModal = () => {
    setIsAddTodoModal(true);
  };

  const handelCloseTodoModal = () => {
    setIsAddTodoModal(false);
  };

  return (
    <>
      {isAddTodoModal && (
        <TodoAddModal
          onAddToDo={showTodoToastMessage}
          onClose={handelCloseTodoModal}
        />
      )}
      <S.Wrapper>
        <S.Container>
          <S.Title>List</S.Title>
          <S.Content>
            <TodoList todoList={todoList} setTodoList={setTodoList} />
          </S.Content>
          <S.ButtonBox>
            <BasicButton
              variant={"primary"}
              size={"full"}
              onClick={handelOpenTodoModal}
            >
              추가
            </BasicButton>
          </S.ButtonBox>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default TodoPage;

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};
  color: ${({ theme }) => theme.PALETTE.fontColor};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter}
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const S = {
  Wrapper,
  Container,
  Title,
  ButtonBox,
  Content,
};
