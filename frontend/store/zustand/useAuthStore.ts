// src/store/useAuthStore.ts
import { create } from "zustand";
import { loginService } from "@/services/authService";

interface AuthState {
  token: string | null;
  signIn: (email: string, password: string) => Promise<string | null>; // get
  signOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
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
  signOut: () => set({ token: null }),
}));
