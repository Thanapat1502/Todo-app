import { create } from "zustand";
import { TaskStatusEnum } from "@/common/enum/task-status.enum";
import TaskModel from "@/common/model/task/task.model";
import {
  fetchTasksService,
  addTaskService,
  editTaskService,
  toggleTaskStatusService,
  deleteTaskService,
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

  toggleStatusError: string | null;
  clearToggleStatusError: () => void;
  toggleStatus: (task: TaskModel) => Promise<void>;
  deleteLoading: boolean;
  deleteError: string | null;
  clearDeleteError: () => void;
  removeTask: (taskId: number) => Promise<void>;
}

const useTaskStore = create<TaskState>((set, get) => ({
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
        set({
          tasksList: get().tasksList.map((task: TaskModel) =>
            task.id === taskId ? { ...task, task_name: newTask } : task
          ),
        });
      }
    } catch (err) {
      console.log(err);
      set({ editTaskError: err.message });
    }
  },
  toggleStatusError: null,
  clearToggleStatusError: () => set({ toggleStatusError: null }),
  toggleStatus: async (task: TaskModel) => {
    const taskId = task.id;
    //if item is Done chang to PENDING, If item is Pending cahng to DONE
    const newStatus =
      task.status === TaskStatusEnum.PENDING
        ? TaskStatusEnum.DONE
        : TaskStatusEnum.PENDING;
    try {
      console.log("task id:", taskId);
      console.log("old status:", task.status);
      console.log("new status:", newStatus);
      const result = await toggleTaskStatusService(taskId, newStatus);
      if (result.message === "Success") {
        //re-render by changing taskList
        set({
          tasksList: get().tasksList.map((task: TaskModel) =>
            task.id === taskId ? { ...task, status: newStatus } : task
          ),
        });
      }
    } catch (err) {
      console.log(err);
      set({ editTaskError: err.message });
    }
  },
  deleteLoading: false,
  deleteError: null,
  clearDeleteError: () => set({ deleteError: null }),
  removeTask: async (taskId: number) => {
    set({ deleteError: null, deleteLoading: true });
    try {
      const result = await deleteTaskService(taskId);
      if (result.message === "Success") {
        set({
          tasksList: get().tasksList.filter(
            (task: TaskModel) => task.id !== taskId
          ),
          deleteError: null,
          deleteLoading: false,
        });
      }
    } catch (err) {
      console.log(err);
      set({ editTaskError: err.message });
    }
    set({ deleteLoading: false });
  },
}));

export default useTaskStore;
