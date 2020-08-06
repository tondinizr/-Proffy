import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...props }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>
        {label}
        <input id={name} {...props} />
      </label>
    </div>
  );
};

export default Input;
