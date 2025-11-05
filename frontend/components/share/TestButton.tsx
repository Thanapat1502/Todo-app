import { CustomButton } from "./CustomButton";

type TestButtonProps = {
  onClick: () => void;
  label?: string;
  color?: string;
};

export const TestButton = (props: TestButtonProps) => {
  const { onClick, color = "red", label } = props;

  return (
    <CustomButton
      type="button"
      // className={`bg-${color}-500 hover:bg-${color}-600}`}
      className="bg-amber-400 hover:bg-amber-500"
      onClick={onClick}>
      {label ? label : "Test Button"}
    </CustomButton>
  );
};
