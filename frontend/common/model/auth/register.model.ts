import get from "lodash/get";

class RegisterRespond {
  userId: string;
  email: string;
  username: string;
  createdAt: string;

  constructor(json: unknown) {
    this.userId = get(json, "id", "");
    this.email = get(json, "email", "");
    this.username = get(json, "username", "");
    this.createdAt = get(json, "createdAt", "");
  }
}

export default RegisterRespond;
