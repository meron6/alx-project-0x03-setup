// components/common/Button.tsx
import { ButtonProps } from "@/interface";

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
