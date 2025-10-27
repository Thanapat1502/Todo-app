import get from "lodash/get";

class LoginResponse {
  accessToken: string;

  constructor(json: unknown) {
    this.accessToken = get(json, "accessToken", "");
  }
}

export default LoginResponse;
