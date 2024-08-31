import CustomInputProps from "./types";

const CustomInput: React.FC<CustomInputProps> = ({ value, onChange, label, type = 'text' }) => {
  const inputId = `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="w-full">
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        className="w-full p-1 bg-[#F0F0F0] border border-[#F2F2F2] rounded-md"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CustomInput;