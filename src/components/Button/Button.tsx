import React from "react";

import "./Button.css";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: object;
  className?: string | null;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  style,
  className,
  disabled,
}) => {
  return (
    <button
      data-testid="btn"
      type="button"
      className={`btn ${className} ${disabled && 'disabled'}`}
      style={style}
      onClick={(e) => onClick(e)}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
