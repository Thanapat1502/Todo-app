// src/store/useAuthStore.ts
import { create } from "zustand";
import { UserRoleEnum } from "@/common/enum/user-role.enum";
import { registerService } from "@/services/authService";
import { loginService } from "@/services/authService";

export type UserData = {
  email: string;
  username: string;
  password: string;
};

interface AuthState {
  token: string | null;
  isInitialized: boolean;
  registerUser: (userData: UserData) => Promise<{ token: string } | null>;

  signIn: (email: string, password: string) => Promise<string | null>; // get
  autoSignIn: () => Promise<void>;
  signOut: () => void;
}

const useAuthStore = create<AuthState>((set, get) => ({
  token: null,
  isInitialized: false,
  registerUser: async (userData) => {
    const { email, username, password } = userData;
    const role = UserRoleEnum.USER;
    if (email && username && password) {
      try {
        const result = await registerService(email, username, password, role);
        console.log("result:", result);
        set({ token: result.token });
        return { token: result.token };
      } catch (err) {
        console.log(err);
        return null;
      }
    }
    return null;
  },
  signIn: async (email, password) => {
    try {
      const data = await loginService(email, password);
      console.log("data:", data);
      if (data) {
        const token = typeof data === "string" ? data : data.token ?? data;
        set({ token });
        return token;
      } else {
        console.warn("No token found.");
        set({ token: null });
        return null;
      }
    } catch (err) {
      console.log(err);
      set({ token: null });

      return null;
    }
  },
  autoSignIn: async () => {
    const token = localStorage.getItem("token");
    if (get().isInitialized) return; //call only one time

    if (token) {
      set({ token, isInitialized: true });
    } else {
      set({ token: null, isInitialized: false });
    }
  },
  signOut: () => set({ token: null }),
}));

export default useAuthStore;
