import { axiosInstance } from "apis/core";
import { useAuth } from "contexts/auth.ctx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { accessToken, logout } = useAuth();
  const navigation = useNavigate();

  const onPressRefreshBtn = async () => {
    try {
      await axiosInstance.post("/user/jwt");
    } catch (err) {
      console.error(err);
    }
  };

  const onPressLogoutBtn = async () => {
    try {
      await logout();
      navigation("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      HEADER
      <button onClick={onPressRefreshBtn}>리프레시</button>
      <button onClick={onPressLogoutBtn}>
        {accessToken ? "로그아웃" : "로그인"}
      </button>
    </header>
  );
};

export default Header;
