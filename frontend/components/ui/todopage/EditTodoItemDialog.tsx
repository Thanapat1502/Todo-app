"use client";
import { CustomButton } from "@/components/share/CustomButton";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/base/dialog";
import { useForm, Controller } from "react-hook-form";
import useTaskStore from "@/store/zustand/useTaskStore";
import CustomInput from "@/components/share/CustomInput";

type FormValues = {
  todoItem: string;
};

export function EditTodoItemDialog(prosp: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  oldTaskId: number;
  oldTaskName: string;
}) {
  const { oldTaskId, oldTaskName = "", isOpen, setIsOpen } = prosp;
  const { editTask, getTaskList } = useTaskStore();

  const toggleOpen = () => setIsOpen(!isOpen);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      todoItem: oldTaskName,
    },
  });
  const onSubmit = async (data: FormValues) => {
    console.log("Edit Task INITIAED --- *** --- ***");
    console.log(data);
    try {
      if (data.todoItem.trim().length === 0) {
        reset();
        setIsOpen(false);
        return;
      }
      await editTask(oldTaskId, data.todoItem);
      getTaskList();
    } catch (err) {}
    setIsOpen(false);
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={toggleOpen}>
      {/** Display Popup modal */}
      <DialogContent className="flex-1">
        {/**Form should be inside DialogContent */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-4"
          noValidate>
          {/** Act as title of modal box */}
          <DialogHeader className="flex justify-center items-start">
            <DialogTitle>Edit your task</DialogTitle>
            <DialogDescription>Edit your task here.</DialogDescription>
          </DialogHeader>

          {/** Content, edit it freely */}
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <Controller
                control={control}
                name="todoItem"
                rules={{}}
                render={({ field: { onChange, value } }) => {
                  return (
                    <CustomInput
                      id="todoItem"
                      type="text"
                      placeholder="Need to fix something..."
                      value={value}
                      onChange={onChange}
                    />
                  );
                }}
              />
            </div>
          </div>

          {/** Footer, add action button */}
          <DialogFooter className="flex flex-row justify-around lg:justify-center gap-3 ">
            <CustomButton
              className="w-2/3"
              type="submit"
              isLoading={isSubmitting}>
              Edit
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
