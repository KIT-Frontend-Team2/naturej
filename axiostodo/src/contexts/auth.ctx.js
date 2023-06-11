import AuthApi from "apis/auth.api";
import { createContext, useContext, useEffect, useState } from "react";
import TokenRepository from "repositories/TokenRepository";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const token = TokenRepository.getToken();
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const login = (token) => {
    TokenRepository.setToken(token);
    setAccessToken(token);
  };

  // 로그아웃 API & 토큰 비우기
  const logout = async () => {
    const res = await AuthApi.logout();
    if (res.status === 201) {
      TokenRepository.removeToken();
      setAccessToken(null);
    }
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
