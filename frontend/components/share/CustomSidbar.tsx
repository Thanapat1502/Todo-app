"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/base/sidebar";
import { cn } from "@/lib/utils";
import { Home, Users, ListTodo, User, LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "../base/button";
import { CustomButton } from "./CustomButton";
import { MenuSquareIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export type CustomsidbarProps = {
  containerClassName?: string;
  className?: string;
  title?: string;
  defaultPath?: string;
  menus: { label: string; icon: any; href: string }[];
  lastMenu?: { label: string; icon: any; onClick: () => void };
};

export const CustomSidebar = (props: CustomsidbarProps) => {
  const {
    containerClassName,
    className,
    title,
    menus,
    defaultPath = "/",
    lastMenu = { label: "Logout", icon: LogOut, onClick: () => {} },
  } = props;
  const pathName = usePathname();

  return (
    <Sidebar className="border-r shadow-sm">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{title}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menus.map((menu, index) => {
                const isActive = pathName === menu.href;
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={menu.href}
                        // className="flex items-center gap-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2"
                        className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-teal-500 text-white shadow-sm"
                            : "text-gray-700 hover:bg-accent hover:text-accent-foreground"
                        }`}>
                        <menu.icon className="w-4 h-4" />
                        {menu.label}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t mt-auto p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <CustomButton
                className="flex items-center gap-2 w-full text-sm font-medium text-red-500 hover:bg-red-500 hover:text-white px-3 py-2 rounded-md cursor-pointer"
                variant="ghost"
                onClick={lastMenu.onClick}>
                <lastMenu.icon className="w-4 h-4" />
                {lastMenu.label}
              </CustomButton>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export const CustomSidebarTrigger = ({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="default"
      size="lg"
      className={cn(
        "m-2 size-10 rounded-full bg-gray-100 hover:bg-gray-200 text-teal-500 hover:text-teal-600 fixed",
        className
      )}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}>
      <MenuSquareIcon className="w-6 h-6" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};
