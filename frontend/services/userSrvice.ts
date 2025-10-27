import api from "@/lib/axiosClient";

export function getUserProfile(): Promise<{ data: any }> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await api.get("/users/profile");
      const data = res.data;
      //should call model here
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
}
