import axios from "./AxiosClient";

class authService {
  async signIn(emailOrUsername, password) {
    const result = await axios.post("/auth/sign-in", {
      emailOrUsername,
      password
    });
    localStorage.setItem("token", result.data.accessToken);
    return result.data;
  }
}

export default authService;
