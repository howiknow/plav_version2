import { DynamicButtonProps } from "../types/components";

const DynamicButton = ({ text, className = "" }: DynamicButtonProps) => {
  return (
    <button
      className={`bg-button-color font-size-14 justify-center items-center text-Mono-Navy px-4 py-2 rounded-lg font-medium flex ${className}`}
    >
      {text}
    </button>
  );
};

export default DynamicButton;
