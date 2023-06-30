import React, { ChangeEvent } from "react";

import "./InputField.css";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  isValid?: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  isValid,
  disabled,
  onChange
}) => {
  return (
    <div className="input-wrapper" data-testid="input-wrapper">
      <label htmlFor={label}>{label}</label>
      <input
        data-testid="input-field"
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {!isValid && <p data-testid="error-validation" className="error">Please check that your input is valid</p>}
    </div>
  );
};

export default InputField;
