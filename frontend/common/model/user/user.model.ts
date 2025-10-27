import get from "lodash/get";
import { UserRoleEnum } from "@/common/enum/user-role.enum";

class UserModel {
  id: string;
  email: string;
  username: string;
  role: UserRoleEnum;

  constructor(json: unknown) {
    this.id = get(json, "id", "");
    this.email = get(json, "email", "");
    this.username = get(json, "username", "");
    this.role = get(json, "role", UserRoleEnum.USER);
  }
}

export default UserModel;
