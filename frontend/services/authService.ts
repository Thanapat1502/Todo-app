import LoginResponse from "@/common/model/auth/login.model";
import api from "@/lib/axiosClient";
import get from "lodash/get";

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
      const result: LoginResponse = new LoginResponse(get(data, "data"));
      //should call model here
      resolve({ token: result.accessToken });
    } catch (err) {
      reject(err);
    }
  });
}
