import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen, faBan } from "@fortawesome/free-solid-svg-icons";
import { flexAlignCenter, flexCenter } from "@styles/common";
import { useTodo } from "contexts/todo.ctx";

const OneTodo = ({ todo }) => {
  const { id, state, title, content } = todo;
  const [isEditMode, setIsEditMode] = useState(false);

  const { register } = useForm();

  const { updateTodo, deleteTodo } = useTodo();

  const handleTodoEdit = (e) => {
    e.preventDefault();
    if (!isEditMode) return setIsEditMode(true);
    const editTitle = e.target.title.value;
    const editContent = e.target.content.value;
    updateTodo(id, editContent, state);
    setIsEditMode(false);
  };

  const handleTodoDelete = () => {
    deleteTodo(id);
  };

  const handleTodoComplete = () => {
    updateTodo(id, content, !state);
  };

  return (
    <S.Wrapper state={state}>
      <form onSubmit={handleTodoEdit}>
        <S.Header>
          <S.StateBox state={state}>
            <FontAwesomeIcon icon={faCheck} onClick={handleTodoComplete} />
          </S.StateBox>
          <S.Title state={state}>
            {isEditMode ? (
              <textarea defaultValue={title} {...register("title")}></textarea>
            ) : (
              title
            )}
            <div>
              <S.Button>
                <FontAwesomeIcon icon={faPen} />
              </S.Button>
              <FontAwesomeIcon icon={faBan} onClick={handleTodoDelete} />
            </div>
          </S.Title>
        </S.Header>
        <S.Content state={state}>
          {isEditMode ? (
            <textarea
              defaultValue={content}
              {...register("content")}
            ></textarea>
          ) : (
            content
          )}
        </S.Content>
      </form>
    </S.Wrapper>
  );
};

export default OneTodo;

const Wrapper = styled.li`
  width: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border: 1px solid #999;
  margin: 16px 0;
  list-style: none;
  border-radius: 8px;
  background-color: ${({ state, theme }) =>
    state ? theme.PALETTE.gray[100] : theme.PALETTE.white};
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  ${flexAlignCenter};
  padding: 8px 16px;
  height: 48px;
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-decoration: ${({ state }) => (state ? "line-through" : "none")};

  & div {
    ${flexCenter}
    gap: 16px;

    & svg {
      cursor: pointer;

      :hover {
        transform: scale(1.2);
      }
    }
  }
`;

const StateBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  ${flexCenter};
  color: ${({ state }) => (state ? "#3CB371" : "#999")};
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

const Content = styled.div`
  padding: 16px;
  text-decoration: ${({ state }) => (state ? "line-through" : "none")};
  & textarea {
    width: 100%;
    height: 100%;
    border: 1px dotted #999;
    outline: none;
    resize: none;
  }
`;

const Button = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  font-size: 1em;
`;

const S = {
  Wrapper,
  Header,
  StateBox,
  Title,
  Content,
  Button,
};
