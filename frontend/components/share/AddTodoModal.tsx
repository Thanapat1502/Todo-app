"use client";
import { CustomButton } from "./CustomButton";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/base/dialog";
import CustomInput from "./CustomInput";
import { Text } from "./Text";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useTaskStore from "@/store/zustand/useTaskStore";

type FormValues = {
  todoItem: string;
};

export function AddTodoModal() {
  const [open, setOpen] = useState(false);
  const toggleDialog = () => {
    setOpen(!open);
    reset();
  };

  const { addTask, getTaskList } = useTaskStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onChange",
  });
  const onSubmit = async (data: FormValues) => {
    console.log("Add New Task Submit ---------->");
    console.log(data);
    try {
      await addTask(data.todoItem);
      getTaskList();
    } catch (err) {}
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={toggleDialog}>
      {/** Display Trigger button */}
      <DialogTrigger asChild>
        <CustomButton variant="default" className="w-full" type="button">
          <Text color="white">+ Add new todo</Text>
        </CustomButton>
      </DialogTrigger>

      {/** Display Popup modal */}
      <DialogContent className="flex-1">
        {/**Form should be inside DialogContent */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-4"
          noValidate>
          {/** Act as title of modal box */}
          <DialogHeader className="flex justify-center items-start">
            <DialogTitle>New task</DialogTitle>
            <DialogDescription>Add your new task here.</DialogDescription>
          </DialogHeader>

          {/** Content, edit it freely */}
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <CustomInput
                {...register("todoItem")}
                id="todoItem"
                type="text"
                placeholder="Add your new task here."
              />
            </div>
          </div>

          {/** Footer, add action button */}
          <DialogFooter className="flex flex-row justify-around lg:justify-center gap-3 ">
            <CustomButton
              className="w-2/3"
              type="submit"
              isLoading={isSubmitting}>
              Add
            </CustomButton>

            <DialogClose className="flex-1" asChild>
              <CustomButton type="button" variant="secondary">
                Cancle
              </CustomButton>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
