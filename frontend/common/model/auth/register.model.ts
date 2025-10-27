import get from "lodash/get";

class RegisterRespond {
  accessToken: string;
  userId: string;

  constructor(json: unknown) {
    this.accessToken = get(json, "accessToken", "");
    this.userId = get(json, "userId", "");
  }
}

export default RegisterRespond;
