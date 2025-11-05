import { TextFrame } from "@/components/share/TextFrame";
import { CustomButton } from "@/components/share/CustomButton";
import { Text } from "@/components/share/Text";
export type TodoItemType = {
  id: number;
  user_id: number;
  item_name: string;
  status: string;
  created_at: string;
  updated_at: string;
};

export interface TodoItemProps {
  className?: string;
  item: TodoItemType;
  onClick?: () => void;
}

export const TodoItem = (props: TodoItemProps) => {
  const { className, item } = props;
  return (
    <CustomButton
      variant={"outline"}
      className={`cursor-pointer flex-1 border-2 w-full justify-between ${className}}`}>
      <Text>{item.item_name}</Text>
      <Text>{item.status}</Text>
    </CustomButton>
  );
};
