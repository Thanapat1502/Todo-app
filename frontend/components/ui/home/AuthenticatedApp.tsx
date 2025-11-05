"use client";
import { CustomButton } from "@/components/share/CustomButton";
import { Text } from "@/components/share/Text";
import { TodoItem } from "../todopage/TodoItem";
import { AddTodoModal } from "@/components/share/AddTodoModal";
import { TestButton } from "@/components/share/TestButton";
import useTaskStore from "@/store/zustand/useTaskStore";
import { useEffect } from "react";

const mockData = [
  {
    id: 1,
    user_id: 1,
    item_name: "todo1",
    status: "PENDING",
    created_at: "",
    updated_at: "",
  },
  {
    id: 2,
    user_id: 1,
    item_name: "todo2",
    status: "DONE",
    created_at: "",
    updated_at: "",
  },
  {
    id: 3,
    user_id: 1,
    item_name: "todo3",
    status: "PENDING",
    created_at: "",
    updated_at: "",
  },
  {
    id: 4,
    user_id: 1,
    item_name: "todo4",
    status: "DONE",
    created_at: "",
    updated_at: "",
  },
];

export const AuthenticatedApp = () => {
  const { tasksList, getTaskList } = useTaskStore();
  const addTodo = () => {};
  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center gap-7">
      {mockData.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
      <AddTodoModal />
      <TestButton
        label="Log Task"
        onClick={() => {
          console.log("Task List :===>");
          console.log(tasksList);
          console.log("<================>");
        }}
      />
      {/* <CustomButton className="w-full">+ Add Todo</CustomButton> */}
    </div>
  );
};
