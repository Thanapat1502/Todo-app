import get from "lodash/get";

class LoginResponse {
  loginMessage: string;
  token: string;

  constructor(json: unknown) {
    this.loginMessage = get(json, "data.message", "");
    this.token = get(json, "data.access_token", "");
  }
}

export default LoginResponse;
