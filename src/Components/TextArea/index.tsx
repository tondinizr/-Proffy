import React, { TextareaHTMLAttributes } from "react";

import "./styles.css";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, ...props }) => {
  return (
    <div className="textArea-block">
      <label htmlFor={name}>
        {label}
        <textarea id={name} {...props} />
      </label>
    </div>
  );
};

export default TextArea;
