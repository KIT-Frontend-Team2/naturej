import { createBrowserRouter } from "react-router-dom";
import MainPage from "@pages/main";
import TodoPage from "@pages/todo";
import Layout from "@components/Layout";
import ReactHookForm from "@pages/reactHookForm";
import PrivateRoute from "./private";

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/react-hook-form",
          element: <ReactHookForm />,
        },
        {
          element: <PrivateRoute />,
          children: [
            {
              path: "/todo/:todoId",
              element: <TodoPage />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);
export default router;
