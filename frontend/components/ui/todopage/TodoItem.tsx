"use client";

import { useState } from "react";
import { Text } from "@/components/share/Text";
import { CustomButton } from "@/components/share/CustomButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from "@/components/base/dropdown-menu";
import { MoreVertical, Edit2Icon, Trash2 } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
import { motion, AnimatePresence } from "motion/react";
import TaskModel from "@/common/model/task/task.model";
import { TaskStatusEnum } from "@/common/enum/task-status.enum";
import { EditTodoItemDialog } from "@/components/ui/todopage/EditTodoItemDialog";

type TodoItemProps = {
  item: TaskModel;
  className?: string;
};

export const TaskItem = ({ item, className }: TodoItemProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleActive = () => setIsActive(!isActive);

  const handleDone = () => {};
  const handleEdit = () => {
    setModalOpen(true);
  };
  const handleDelete = () => {};
  return (
    <div className={`relative flex items-center gap-2 w-full ${className}`}>
      {/* ปุ่ม Task หลัก */}

      <div className="flex flex-row w-full justify-center items-center py-1 border-2 rounded-2xl">
        <CustomButton
          variant={"ghost"}
          className="flex flex-1 w-full h-auto justify-between border-0"
          onClick={toggleActive}>
          <Text
            varient="Subtitle"
            className="flex-1 text-start whitespace-normal">
            {item.item_name}
          </Text>
        </CustomButton>
        {/* Dropdown Menu */}
        <DropdownMenu>
          {/**Dropdown trigger */}
          <DropdownMenuTrigger asChild>
            <CustomButton
              variant="ghost"
              size="icon"
              onClick={(e) => e.stopPropagation()} // กันการ toggle หลัก
            >
              <MoreVertical className="h-4 w-4" />
            </CustomButton>
          </DropdownMenuTrigger>
          {/**Dropdown main menu */}
          <DropdownMenuPortal>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleEdit()}>
                <Edit2Icon className="h-4 w-4 mr-2" />
                <Text>Edit</Text>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDelete()}>
                <Trash2 className="h-4 w-4 mr-2 text-red-500" />
                <Text className="text-red-500">Delete</Text>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>
      </div>

      {/* DONE button animated from Right side  */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="done-btn"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}>
            <CustomButton
              variant="default"
              size="lg"
              className={`py-6 ${
                item.status === TaskStatusEnum.DONE
                  ? `bg-amber-400`
                  : `bg-teal-500`
              }`}
              onClick={handleDone}>
              <Text color="white">
                {item.status === TaskStatusEnum.DONE ? "PENDING" : "DONE!"}
              </Text>
            </CustomButton>
          </motion.div>
        )}
      </AnimatePresence>

      <EditTodoItemDialog
        isOpen={isModalOpen}
        setIsOpen={setModalOpen}
        oldTaskName={item.item_name}
        oldTaskId={item.id}
      />
    </div>
  );
};
