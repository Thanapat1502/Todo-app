// src/store/useAuthStore.ts
import { create } from "zustand";
import { UserRoleEnum } from "@/common/enum/user-role.enum";
import { registerService } from "@/services/authService";
import { loginService } from "@/services/authService";
import RegisterRespond from "@/common/model/auth/register.model";

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
  registerUser: (userData: UserData) => Promise<RegisterRespond | null>;

  isInitialized: boolean;
  signInError: string | null;
  clearSignInError: () => void;
  signIn: (email: string, password: string) => Promise<string | null>; // get token
  autoSignIn: () => Promise<void>; // read token and auto login on web loading
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
        set({ registerSuccess: "Register Success!" });
        return result;
      } catch (err) {
        console.error("CATCH Rigister Error:", err);
        set({ registerError: (err as Error).message });
        return null;
      }
    }

    return null;
  },

  //For Sign-In & Sign-Out
  isInitialized: false,
  signInError: null,
  clearSignInError: () => set({ signInError: null }),
  signIn: async (email, password) => {
    try {
      const data = await loginService(email, password);
      // console.log("CATCH Login Result:", data);
      if (data) {
        // Login Successful Case
        const token = typeof data === "string" ? data : data.token ?? data;
        set({ token });
        localStorage.setItem("token", token);
        return token;
      } else {
        // console.log("No token found.");
        localStorage.removeItem("token");
        set({ token: null });
        return null;
      }
    } catch (err) {
      localStorage.removeItem("token");
      if (err.statusCode && err.statusCode === 401) {
        set({ signInError: "Invalid email or password." });
        set({ token: null });
        return null;
      }
      set({ signInError: err.message });
      set({ token: null });
      return null;
    }
  },
  autoSignIn: async () => {
    const token = localStorage.getItem("token");
    // console.log("AUTO SIGNIN INITIATED **** ---- **** ---- ***");
    // console.log("TOKEN:", token);
    if (get().isInitialized) return; //call only one time
    if (token) {
      // console.log("AUTO SIGNIN AUHORIZATION **** **** ***");
      set({ token, isInitialized: true });
    } else {
      // console.log("AUTO SIGNIN NO TOKEN FOUND ---- ----");
      set({ token: null, isInitialized: true });
    }
  },
  signOut: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
}));

export default useAuthStore;
