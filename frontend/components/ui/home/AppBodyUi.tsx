"use client";
import { useEffect } from "react";
import { AuthenticatedApp } from "./AuthenticatedApp";
import { UnauthenticatedManul } from "./UnauthenticatedManul";
import useAppStore from "@/store/zustand/useAppStore";
import useUserStore from "@/store/zustand/useUserStore";

export const AppBodyUi = () => {
  //   const { token } = useAuthStore();
  const { loading, setLoading } = useAppStore();
  const { user } = useUserStore();
  useEffect(() => {}, [loading]);

  return user ? (
    // <UnauthenticatedManul />
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedManul />
  );

  // return loading ? (
  //   <div>Loading...</div>
  // ) : user ? (
  //   // <UnauthenticatedManul />
  //   <AuthenticatedApp />
  // ) : (
  //   <UnauthenticatedManul />
  // );
};
