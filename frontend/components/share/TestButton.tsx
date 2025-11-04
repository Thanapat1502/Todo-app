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
      onClick={onClick}
      className={`bg-${color}-500 hover:bg-${color}-600}`}>
      {label ? label : "Test Button"}
    </CustomButton>
  );
};
