import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";
import { ThemeProvider } from "styled-components";
import theme, { toastOption } from "./styles/theme";
import GlobalStyles from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <ToastContainer {...toastOption} />
    </ThemeProvider>
  );
}

export default App;
