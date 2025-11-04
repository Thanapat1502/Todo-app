import api from "@/lib/axiosClient";
import APIResponse from "@/common/model/api/apiResponse.model";
import UserModel from "@/common/model/user/user.model";

export function getUserProfile(): Promise<{ data: UserModel }> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await api.get("/user/profile");
      const data: UserModel = new UserModel(res.data);
      const apiResponse: APIResponse = new APIResponse(data);
      //should call model here
      resolve({ data, ...apiResponse });
    } catch (err) {
      reject(new APIResponse(err).message);
    }
  });
}
