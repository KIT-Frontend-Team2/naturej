const { axiosInstance } = require("./core");

const PATH = "/user";
// 로그인 API
const AuthApi = {
  login(email, password) {
    return axiosInstance.post(`${PATH}/login`, { email, password });
  },
  signUp(email, password) {
    return axiosInstance.post(`${PATH}/sign`, { email, password });
  },
  logout() {
    return axiosInstance.post(`${PATH}/logout`);
  },
};

export default AuthApi;
