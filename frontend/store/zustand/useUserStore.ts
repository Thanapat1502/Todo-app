// src/store/useAuthStore.ts
import { create } from "zustand";
import useAuthStore from "./useAuthStore";
import { getUserProfile } from "@/services/userSrvice";
import UserModel from "@/common/model/user/user.model";

interface UserState {
  user: UserModel | null; // User info
  loading: boolean; // loading state
  setUpUser: () => void; // fetch and store user info
  removeUser: () => void; // remove user info
  setLoading: (loading: boolean) => void; // set loading state
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
  setUpUser: async () => {
    set({ loading: true });
    try {
      const token = useAuthStore.getState().token;
      if (!token) {
        console.warn("No access token found.");
        set({ user: null, loading: false });
        return null;
      }

      const result = await getUserProfile();
      if (result && result.data) {
        set({ user: result.data, loading: false });
        return result.data;
      } else {
        console.warn("No profile data returned.");
        set({ user: null, loading: false });
        return null;
      }
    } catch (error) {
      console.warn("Error occor:", error);
      set({ user: null, loading: false });
      return null;
    }
  },
  removeUser: () => set({ user: null }),
}));

export default useUserStore;
