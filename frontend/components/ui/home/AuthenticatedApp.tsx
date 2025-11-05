"use client";
import { CustomButton } from "@/components/share/CustomButton";
import { Text } from "@/components/share/Text";
import { TaskItem } from "../todopage/TodoItem";
import { AddTodoModal } from "@/components/share/AddTodoModal";
import { TestButton } from "@/components/share/TestButton";
import useTaskStore from "@/store/zustand/useTaskStore";
import { useEffect } from "react";

export const AuthenticatedApp = () => {
  const { tasksList, getTaskList } = useTaskStore();
  const addTodo = () => {};
  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center gap-7">
      {tasksList.map((item) => (
        <TaskItem key={item.id} item={item} />
      ))}
      <AddTodoModal />
      {/* <TestButton
        label="Log Task"
        onClick={() => {
          console.log("Task List :===>");
          console.log(tasksList);
          console.log("<================>");
        }}
      /> */}
    </div>
  );
};
