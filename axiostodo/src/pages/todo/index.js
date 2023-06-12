import { useEffect, useState } from "react";
import styled from "styled-components";
import BasicButton from "@components/Button/Button";
import { flexAlignCenter, flexCenter } from "@styles/common";
import TodoAddModal from "./components/Modal/add-modal";
import TodoList from "./components/List/todo-list";
import { useTodo } from "contexts/todo.ctx";

const TodoPage = () => {
  // 모달창 띄울건지 관리하는 state 변수
  const [isAddTodoModal, setIsAddTodoModal] = useState(false);

  const { getTodoList } = useTodo();

  // useContext의 useEffect가 실행되는 시점 : 앱이 실행될 때
  // 내가 원하는 페이지에 있을 때 todoList를 불러올 수 있도록 todo page에 설정
  useEffect(() => {
    getTodoList();
  }, []);

  const handelOpenTodoModal = () => {
    setIsAddTodoModal(true);
  };

  const handelCloseTodoModal = () => {
    setIsAddTodoModal(false);
  };

  return (
    <>
      {isAddTodoModal && <TodoAddModal onClose={handelCloseTodoModal} />}
      <S.Wrapper>
        <S.Container>
          <S.Title>List</S.Title>
          <S.Content>
            <TodoList />
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
