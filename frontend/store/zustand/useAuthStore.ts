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
  registerError: string | null;
  registerSuccess: string | null;
  clearRegisterError: () => void;
  clearRegisterSuccess: () => void;
  registerUser: (userData: UserData) => Promise<{ token: string } | null>;

  isInitialized: boolean;
  signIn: (email: string, password: string) => Promise<string | null>; // get
  autoSignIn: () => Promise<void>;
  signOut: () => void;
}

const useAuthStore = create<AuthState>((set, get) => ({
  //For Token
  token: null,

  //For Register
  registerError: null,
  registerSuccess: null,
  clearRegisterError: () => set({ registerError: null }),
  clearRegisterSuccess: () => set({ registerSuccess: null }),
  registerUser: async (userData) => {
    const { email, username, password } = userData;
    const role = UserRoleEnum.USER;
    if (email && username && password) {
      try {
        const result = await registerService(email, username, password, role);
        console.log("CATCH Rigister Result:", result);
        set({ token: result.token });
        set({ registerSuccess: "Register Success!" });
        return { token: result.token };
      } catch (err) {
        console.error("CATCH Rigister Error:", err);
        set({ registerError: err.message });
        return null;
      }
    }

    return null;
  },

  //For Sign-In & Sign-Out
  isInitialized: false,
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
