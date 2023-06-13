import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "reducer";
import logger from "redux-logger";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development", // 조건식 활용해서 boolean
  middleware: (defaultMiddleware) => {
    if (process.env.NODE_ENV === "development") {
      return [...defaultMiddleware(), logger];
      // defaultMiddleware를 받지 않으면 기본 설치되어 있는 미들웨어를 전부 무시하고 덮어 씌움
      // 현재 상태에서 defaultMiddleware가 없다면 logger만 적용, rtk에서 지원하는 기본 미들웨어를 전부삭제
    }
    return defaultMiddleware();
  },
});
