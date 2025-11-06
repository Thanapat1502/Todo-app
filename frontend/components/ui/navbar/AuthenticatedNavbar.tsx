"use client";
import { CustomButton } from "@/components/share/CustomButton";
import { Text } from "@/components/share/Text";
import { redirect } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from "@/components/base/dropdown-menu";
import useAuthStore from "@/store/zustand/useAuthStore";
import useUserStore from "@/store/zustand/useUserStore";
import { LogOut, ShieldUser, UserCircle } from "lucide-react";
import { UserRoleEnum } from "@/common/enum/user-role.enum";

export const AuthenticatedNavbar = () => {
  const { signOut } = useAuthStore();
  const { user, removeUser } = useUserStore();

  const handleAdmin = () => {
    redirect("/admin");
  };

  const handleMainApp = () => {
    redirect("/");
  };

  const handleLogout = () => {
    signOut();
    removeUser();
    redirect("/");
  };

  return (
    <div className="flex flex-1 justify-end items-center gap-4 w-full">
      <DropdownMenu>
        {/**Dropdown trigger */}
        <DropdownMenuTrigger asChild>
          <CustomButton
            variant="ghost"
            size="icon"
            className="hover:bg-white hover:cursor-pointer w-auto p-2 rounded-2xl bg-teal-500"
            // onClick={(e) => e.stopPropagation()} // กันการ toggle หลัก
          >
            <Text varient="Title">{`Hi! ${user?.username}`}</Text>
          </CustomButton>
        </DropdownMenuTrigger>
        {/**Dropdown main menu */}
        <DropdownMenuPortal>
          <DropdownMenuContent align="end">
            {user?.role === UserRoleEnum.ADMIN && (
              <>
                <DropdownMenuItem onClick={handleAdmin}>
                  {/* <Edit2Icon className="h-4 w-4 mr-2" /> */}
                  <ShieldUser className="h-4 w-4 mr-2" />
                  <Text>Admin dashboard</Text>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleMainApp}>
                  {/* <Edit2Icon className="h-4 w-4 mr-2" /> */}
                  <UserCircle className="h-4 w-4 mr-2" />
                  <Text>Go To App</Text>
                </DropdownMenuItem>
              </>
            )}
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2 text-red-500" />
              <Text className="text-red-500">Logout</Text>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div>
  );
};
