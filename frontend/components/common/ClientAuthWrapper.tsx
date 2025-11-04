"use client";
import { useEffect } from "react";
import useAuthStore from "@/store/zustand/useAuthStore";
import useUserStore from "@/store/zustand/useUserStore";
import useAppStore from "@/store/zustand/useAppStore";

export default function ClientAuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token, autoSignIn, isInitialized } = useAuthStore();
  const { setUpUser } = useUserStore();
  const { setLoading } = useAppStore();

  useEffect(() => {
    if (!isInitialized) {
      // called if nerver initiallized (login) before
      //will find access_token on localstorage and set it on store
      autoSignIn();
    }
  }, [isInitialized]);

  useEffect(() => {
    //check for token on store, if have one, will auto setupUser()
    setLoading(true);
    const accessToken = token;
    if (accessToken) {
      setUpUser();
    }
    setLoading(false);
  }, [token]);

  return <>{children}</>;
}
