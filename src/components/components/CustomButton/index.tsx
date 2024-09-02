import React from "react";
import CustomButtonProps from "./types";

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick, disabled = false, ariaLabel }) => {
  return (
    <button
      className={`w-full ${disabled ? 'bg-gray-400' : 'bg-black'} text-white font-medium py-2 rounded-md transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      role="button"
    >
      {children}
    </button>
  );
}

export default CustomButton;
