import _ from "lodash";
import api from "@/lib/axiosClient";
import APIResponse from "@/common/model/api/apiResponse.model";
import TaskModel from "@/common/model/task/task.model";
import UserModel from "@/common/model/user/user.model";

export function fetchUsersService(): Promise<UserModel[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await api.get("/admin/all-users");
      const allUser: UserModel[] = _.get(res, "data").map(
        (item: UserModel) => new UserModel(item)
      );
      resolve(allUser);
    } catch (err) {
      reject(new APIResponse(err));
    }
  });
}
export function fetchTasksService(): Promise<TaskModel[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await api.get("/admin/all-items");
      const allTask: TaskModel[] = _.get(res, "data").map(
        (item: TaskModel) => new TaskModel(item)
      );
      resolve(allTask);
    } catch (err) {
      reject(new APIResponse(err));
    }
  });
}
export function fetchUserTasksService(userId: number): Promise<TaskModel[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await api.get(`/admin/user-items/${userId}`);
      const allTask: TaskModel[] = _.get(res, "data").map(
        (item: TaskModel) => new TaskModel(item)
      );
      resolve(allTask);
    } catch (err) {
      reject(new APIResponse(err));
    }
  });
}
