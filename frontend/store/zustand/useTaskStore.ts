import { create } from "zustand";
import { TaskStatusEnum } from "@/common/enum/task-status.enum";
import TaskModel from "@/common/model/task/task.model";
import { fetchTasksService, addTaskService } from "@/services/taskService";
import { get } from "lodash";
import { clear } from "console";

interface TaskState {
  tasksList: TaskModel[];
  loadingTask: boolean;
  getTaskList: () => Promise<void>;

  addTask: (taskName: string) => Promise<void>;
  addTaskError: string | null;
  clearAddTaskError: () => void;

  editTask: (taskId: number, newTask: string) => Promise<void>;
  toggleStatus: (taskId: number, status: TaskStatusEnum) => Promise<void>;
  removeTask: (taskId: number) => Promise<void>;
}

const useTaskStore = create<TaskState>((set) => ({
  tasksList: [],
  loadingTask: false,
  getTaskList: async () => {
    set({ loadingTask: true });
    // console.log("*** --- *** --- *** FETCH TASK INITIATED *** --- *** --- ***");
    const result = await fetchTasksService();
    // console.log(result);
    set({ tasksList: result });
    set({ loadingTask: false });
  },
  addTaskError: null,
  clearAddTaskError: () => set({ addTaskError: null }),
  addTask: async (taskName: string) => {
    set({ addTaskError: null });
    try {
      const result = await addTaskService(taskName);
      // if success, set loading false
      if (result.message === "Success") {
        set({ addTaskError: null });
      }
    } catch (err) {
      console.log(err);
      set({ addTaskError: err.message });
    }
  },
  editTask: async (taskId: number, newTask: string) => {},
  toggleStatus: async (taskId: number, status: TaskStatusEnum) => {},
  removeTask: async (taskId: number) => {},
}));

export default useTaskStore;
