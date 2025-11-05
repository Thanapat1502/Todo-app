import { create } from "zustand";
import { TaskStatusEnum } from "@/common/enum/task-status.enum";
import TaskModel from "@/common/model/task/task.model";
import {
  fetchTasksService,
  addTaskService,
  editTaskService,
} from "@/services/taskService";

interface TaskState {
  tasksList: TaskModel[];
  loadingTask: boolean;
  getTaskList: () => Promise<void>;

  addTask: (taskName: string) => Promise<void>;
  addTaskError: string | null;
  clearAddTaskError: () => void;

  editTask: (taskId: number, newTask: string) => Promise<void>;
  editTaskError: string | null;
  clearEditTaskError: () => void;

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
  editTaskError: null,
  clearEditTaskError: () => set({ editTaskError: null }),
  editTask: async (taskId: number, newTask: string) => {
    try {
      const result = await editTaskService(taskId, newTask);
      if (result.message === "Success") {
        set({ editTaskError: null });
      }
    } catch (err) {
      console.log(err);
      set({ editTaskError: err.message });
    }
  },
  toggleStatus: async (taskId: number, status: TaskStatusEnum) => {},
  removeTask: async (taskId: number) => {},
}));

export default useTaskStore;
