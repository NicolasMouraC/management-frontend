interface CustomInputProps {
  children?: React.ReactNode;
  type?: string;
  value: string | number;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  label: string;
}

export default CustomInputProps;