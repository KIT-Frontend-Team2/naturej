import axios from "axios";
import TokenRepository from "repositories/TokenRepository";
import AuthApi from "./auth.api";

// access token 보내기 (2가지 방법)
// 1. 기본 헤더 이용하는 방법
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${TokenRepository.getToken()}`,
  },
  withCredentials: true,
});

// 2. interceptor 이용하는 방법
// interceptors.request : 프론트엔드가 백엔드로 요청 보내기 전에 요청을 가로채는 것
// axiosInstance.interceptors.request.use((config) => {
//   const accessToken = TokenRepository.getToken();
//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// });

// refresh token 재발급
// interceptors.response : 프론트엔드가 응답을 받기 전에 응답을 가로채는 것
axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (err.response.status === 401) {
      await AuthApi.logout();
      TokenRepository.removeToken();
    }
    // err.config._retry : 앞에서 요청이 있는지 여부
    const originalRequest = err.config;
    if (err.response.status === 403 && !originalRequest._retry) {
      // 한번도 재사용된 적이 없다면
      originalRequest._retry = true;

      // 토큰 재발급 요청
      const res = await axiosInstance.post("/user/jwt");
      if (res.status === 200) {
        const token = res.data.data;
        TokenRepository.setToken(token);
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
        return axiosInstance(originalRequest);
      }
    }
  }
);
