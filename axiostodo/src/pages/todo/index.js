import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import BasicButton from "@components/Button/Button";
import { flexAlignCenter, flexCenter } from "@styles/common";
import TodoAddModal from "./components/Modal/add-modal";
import TodoList from "./components/List/todo-list";
import { axiosInstance } from "utils/axios";

const TodoPage = () => {
  // 모달창 띄울건지 관리하는 state 변수
  const [isAddTodoModal, setIsAddTodoModal] = useState(false);
  const [todoList, setTodoList] = useState([]);

  // 조회
  const getTodoList = async () => {
    const getTodo = await axiosInstance.get("/todo");
    setTodoList(getTodo.data.data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  // 추가
  const addTodo = (title, content) => {
    return axiosInstance.post("/todo", {
      title,
      content,
    });
  };

  const showTodoToastMessage = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;

    if (!title || !content) {
      return alert("빈칸을 채워주세요");
    }

    try {
      await toast.promise(addTodo(title, content), {
        pending: "TODO LOADING",
        success: "TODO SUCCESS",
        error: "TODO ERROR",
      });
      getTodoList();
      setIsAddTodoModal(false);
    } catch (err) {
      console.error(err);
    }
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
