import { create } from "zustand";
import TaskModel from "@/common/model/task/task.model";
import UserModel from "@/common/model/user/user.model";
import {
  fetchUsersService,
  fetchTasksService,
  fetchUserTasksService,
} from "@/services/adminService";

interface AdminState {
  allTasks: TaskModel[];
  allUser: UserModel[];
  userTasks: TaskModel[];
  loadingTask: boolean;
  loadingUser: boolean;
  loadingUserTasks: boolean;
  getAllUsers: () => Promise<void>;
  getAllTasks: () => Promise<void>;
  getUserTasks: (userId: number) => Promise<void>;
}

const useAdminStore = create<AdminState>((set, get) => ({
  allTasks: [],
  allUser: [],
  userTasks: [],
  loadingTask: false,
  loadingUser: false,
  loadingUserTasks: false,
  getAllUsers: async () => {
    set({ loadingUser: true });
    try {
      const result = await fetchUsersService();
      set({ allUser: result });
    } catch (err) {
      console.log(err);
    }
    set({ loadingUser: false });
  },
  getAllTasks: async () => {
    set({ loadingTask: true });
    try {
      const result = await fetchTasksService();
      set({ allTasks: result });
    } catch (err) {
      console.log(err);
    }
    set({ loadingTask: false });
  },
  getUserTasks: async (userId) => {
    set({ loadingUserTasks: true });
    try {
      const result = await fetchUserTasksService(userId);
      set({ userTasks: result });
    } catch (err) {
      console.log(err);
    }
    set({ loadingUserTasks: false });
  },
}));

export default useAdminStore;
