import api from "@/lib/axiosClient";
import get from "lodash/get";
import LoginResponse from "@/common/model/auth/login.model";
import RegisterResponse from "@/common/model/auth/register.model";
import APIResponse from "@/common/model/api/apiResponse.model";
import { UserRoleEnum } from "@/common/enum/user-role.enum";

export function loginService(
  email: string,
  password: string
): Promise<{ token: string }> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });
      //should call model here
      const result: LoginResponse = new LoginResponse(res);
      const apiResponse: APIResponse = new APIResponse(res);
      resolve({ token: result.accessToken, ...apiResponse });
    } catch (err) {
      reject(new APIResponse(err));
    }
  });
}

export function registerService(
  email: string,
  username: string,
  password: string,
  role: UserRoleEnum
): Promise<RegisterResponse> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await api.post("/user/register", {
        email,
        username,
        password,
        role,
      });
      const result: RegisterResponse = new RegisterResponse(res.data);
      const apiResponse: APIResponse = new APIResponse(res);
      resolve({ ...result, ...apiResponse });
    } catch (err) {
      console.log("Error on Service-------------------------------:");
      console.log(err);
      console.log("-------------------------------:");
      reject(new APIResponse(err));
    }
  });
}
