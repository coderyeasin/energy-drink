import { ICustomButton } from "@/lib/interface";
import { cn } from "@/lib/utils";

const CustomButton = ({ children, CustomClass, ...props }: ICustomButton) => {
  return (
    <button
      {...props}
      className={cn(
        "bg-primary text-secondary font-outfit text-base font-medium px-11.25 py-2.5 cursor-pointer transition-colors duration-300",
        CustomClass,
      )}
    >
      {children}
    </button>
  );
};

export default CustomButton;
