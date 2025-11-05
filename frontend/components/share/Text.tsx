const variants = {
  Header1: "text-2xl leading-9 font-semibold",
  Header2: "text-xl leading-[33px] font-semibold",
  Title: "text-[19px] leading-[29px] font-semibold",
  Subtitle: "text-[17px] leading-[26px] font-semibold",
  Button: "text-[17px] leading-[26px] font-semibold",
  Body: "text-[17px] leading-[26px] font-normal",
  CaptionRegular: "text-[15px] leading-[23px] font-normal",
  Support: "text-[14px] leading-[20px] font-semibold",
  Time: "text-[14px] leading-[20px] font-normal italic",
  Remark: "text-[14px] leading-[20px] font-normal italic",
  Timestamp: "text-[12px] leading-[20px] font-normal italic",
  TaskItem: "text-2xl font-semibold",
};

const colors = {
  primary: "text-black",
  secondary: "text-gray-600",
  success: "text-green-500",
  warning: "text-yellow-500",
  danger: "text-red-600",
  info: "text-gray-700",
  black: "text-black",
  white: "text-white",
};

type VariantKey = keyof typeof variants;
type ColorKey = keyof typeof colors;

type TextProps = {
  children: React.ReactNode;
  className?: string;
  varient?: VariantKey;
  color?: ColorKey;
};

export const Text = (props: TextProps) => {
  const { children, className, varient = "Body", color = "primary" } = props;
  const variantClass = variants[varient] ?? "";
  const colorClass = colors[color];
  if (varient === "Header1") {
    return (
      <h1 className={`${variantClass} ${colorClass} ${className}`.trim()}>
        {children}
      </h1>
    );
  } else if (varient === "Header2") {
    return (
      <h2 className={`${variantClass} ${colorClass} ${className}`.trim()}>
        {children}
      </h2>
    );
  } else {
    return (
      <p className={`${variantClass} ${colorClass} ${className}`.trim()}>
        {children}
      </p>
    );
  }
};
