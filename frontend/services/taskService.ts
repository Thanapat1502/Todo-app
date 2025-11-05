import _ from "lodash";
import api from "@/lib/axiosClient";
import APIResponse from "@/common/model/api/apiResponse.model";
import TaskModel from "@/common/model/task/task.model";
import { TaskStatusEnum } from "@/common/enum/task-status.enum";

export function fetchTasksService(): Promise<TaskModel[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await api.get("/items/my-items");
      const allTask: TaskModel[] = _.get(res, "data").map(
        (item: TaskModel) => new TaskModel(item)
      );
      resolve(allTask);
    } catch (err) {
      reject(new APIResponse(err));
    }
  });
}

export function addTaskService(taskName: string): Promise<APIResponse> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await api.post(`/items`, {
        item_name: taskName,
        status: TaskStatusEnum.PENDING,
      });
      const result = new APIResponse(res);
      //   console.log("*** === Add Respond === ***");
      //   console.log(result);
      //   console.log("================");
      resolve(result);
    } catch (err) {
      //   console.log("xxxxxxxxxxx Add Error Res xxxxxxxxxx");
      //   console.log(err);
      //   console.log("xxxxxxxxxxx Add Error Res xxxxxxxxxx");
      reject(new APIResponse(err));
    }
  });
}

export function editTaskService(
  taskId: number,
  newTask: string
): Promise<void> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await api.get(`/items/my-items/${taskId}`, {
        params: {
          item_name: newTask,
        },
      });

      console.log("Edit Respond");
      console.log(res);
      resolve();
    } catch (err) {
      reject(new APIResponse(err));
    }
  });
}
