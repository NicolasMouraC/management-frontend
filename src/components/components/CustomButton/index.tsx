import CustomButtonProps from "./types";

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick, disabled = false }) => {
  return (
    <button
      className={`w-full ${disabled ? 'bg-gray-400' : 'bg-black'} text-white font-medium py-2 rounded-md transition-opacity duration-200`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default CustomButton;
