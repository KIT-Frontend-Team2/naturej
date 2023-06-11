const TOKEN_KEY = "accessToken";
const TokenRepository = {
  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  },
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },
  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  },
};

export default TokenRepository;
