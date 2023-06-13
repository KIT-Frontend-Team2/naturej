import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  addTodoState: {
    loading: false,
    done: false,
    err: null,
  },
  // getTodoState: {},
  // updateTodoState: {},
  // deleteTodoState: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      //immer : 불변성 지키는 라이브러리, 내장되어 있음
      state.todos.unshift(action.payload);
    },
  },
});

// 액션 자동 생성, createAction 함수를 만들지 않아도 dispatch의 action명을 함수로 사용하여
// 매개변수에 액션 객체를 전달받을 수 있다.
export const { addTodo } = todoSlice.actions;
