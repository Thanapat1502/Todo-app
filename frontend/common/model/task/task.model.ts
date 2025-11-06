import get from "lodash/get";
import { TaskStatusEnum } from "@/common/enum/task-status.enum";
class TaskModel {
  id: number;
  user_id: number;
  username: string;
  item_name: string;
  status: TaskStatusEnum;
  created_at: string;
  updated_at: string;

  constructor(json: unknown) {
    this.id = get(json, "id", 0);
    this.user_id = get(json, "user_id", 0);
    this.username = get(json, "username", "");
    this.item_name = get(json, "item_name", "");
    this.status = get(json, "status", TaskStatusEnum.PENDING);
    this.created_at = get(json, "created_at", "");
    this.updated_at = get(json, "updated_at", "");
  }
}

export default TaskModel;
