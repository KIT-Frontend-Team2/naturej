import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";
import { ThemeProvider } from "styled-components";
import theme, { toastOption } from "./styles/theme";
import GlobalStyles from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "contexts/auth.ctx";
import TodoProvider from "contexts/todo.ctx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <TodoProvider>
          <GlobalStyles />
          <RouterProvider router={router} />
          <ToastContainer {...toastOption} />
        </TodoProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
