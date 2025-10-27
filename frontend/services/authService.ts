import api from "@/lib/axiosClient";
import get from "lodash/get";
import LoginResponse from "@/common/model/auth/login.model";
import RegisterResponse from "@/common/model/auth/register.model";
import APIResponse from "@/common/model/api/apiResponse.model";

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
      const data = res.data; // should return access token
      //should call model here
      const result: LoginResponse = new LoginResponse(get(data, "data"));
      const apiResponse: APIResponse = new APIResponse(get(data, "data"));
      resolve({ token: result.accessToken, ...apiResponse });
    } catch (err) {
      reject(new APIResponse(err).message);
    }
  });
}

export function registerService(
  email: string,
  username: string,
  password: string,
  role: string
): Promise<{ token: string }> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await api.post("/auth/register", {
        email,
        username,
        password,
        role,
      });
      const data = res.data; // should return access token
      //should call model here
      const result: RegisterResponse = new RegisterResponse(get(data, "data"));
      const apiResponse: APIResponse = new APIResponse(get(data, "data"));
      resolve({ token: result.accessToken, ...apiResponse });
    } catch (err) {
      reject(new APIResponse(err).message);
    }
  });
}
