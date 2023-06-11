import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";
import { ThemeProvider } from "styled-components";
import theme, { toastOption } from "./styles/theme";
import GlobalStyles from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "contexts/auth.ctx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
        <ToastContainer {...toastOption} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
