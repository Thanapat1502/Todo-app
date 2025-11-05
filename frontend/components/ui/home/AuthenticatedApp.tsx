"use client";
import { TaskItem } from "../todopage/TodoItem";
import { AddTodoModal } from "@/components/share/AddTodoModal";
import useTaskStore from "@/store/zustand/useTaskStore";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

export const AuthenticatedApp = () => {
  const { tasksList, getTaskList } = useTaskStore();
  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <AnimatePresence>
        {tasksList.map((item) => (
          <motion.div
            className="flex-1 w-full"
            key={item.id}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -40, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}>
            <TaskItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
      <AddTodoModal />
    </div>
  );
};
