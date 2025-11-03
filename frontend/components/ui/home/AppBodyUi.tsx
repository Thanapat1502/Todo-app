"use client";
import { AuthenticatedApp } from "./AuthenticatedApp";
import { UnauthenticatedManul } from "./UnauthenticatedManul";
import useAppStore from "@/store/zustand/useAppStore";
import useAuthStore from "@/store/zustand/useAuthStore";
import useUserStore from "@/store/zustand/useUserStore";

export const AppBodyUi = () => {
  //   const { token } = useAuthStore();
  const { loading } = useAppStore();
  const { user } = useUserStore();

  return loading ? (
    <div>Loading...</div>
  ) : user ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedManul />
  );
};
