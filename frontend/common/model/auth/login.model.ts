import get from "lodash/get";

class LoginResponse {
  accessToken: string;

  constructor(json: unknown) {
    this.accessToken = get(json, "data.access_token", "");
  }
}

export default LoginResponse;
