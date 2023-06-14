import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
  // reducers: {
  //   addTodo(state, action) {
  //     //immer : 불변성 지키는 라이브러리, 내장되어 있음
  //     state.todos.unshift(action.payload);
  //   },
  // },
  extraReducers: (builder) => {
    // addTodo loading
    builder.addCase(addTodo.pending, (state) => {
      // 로딩
      state.addTodoState.loading = true;
      state.addTodoState.done = false;
      state.addTodoState.err = null;
    });
    // addTodo fulfilled
    builder.addCase(addTodo.fulfilled, (state, action) => {
      //thunk가 return한 값은 action.payload
      state.todos.unshift(action.payload);
      state.addTodoState.loading = false;
      state.addTodoState.done = false;
      state.addTodoState.err = null;
    });
    // addTodo rejected
    builder.addCase(addTodo.rejected, (state, action) => {
      //
      state.addTodoState.loading = false;
      state.addTodoState.done = false;
      state.addTodoState.err = action.payload;
    });
  },
});

// 액션 자동 생성, createAction 함수를 만들지 않아도 dispatch의 action명을 함수로 사용하여
// 매개변수에 액션 객체를 전달받을 수 있다.
// export const { addTodo } = todoSlice.actions;

export const addTodo = createAsyncThunk(
  "/todo/addTodo",
  async ({ title, content }) => {
    // msw로 만든 가상 백엔드와 데이터 통신
    // 데이터 통신 -> client -> request
    const res = await axios.post("/api/todo", { title, content });
    return res.data;
  }
);
