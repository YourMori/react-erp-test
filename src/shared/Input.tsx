import React from "react";
import styles from "../styles/shared/input.module.scss";

interface IInput {
  type: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  maxlength?: number;
  minlength?: number;
  pattern?: string;
  mask?: string;
}

export const Input: React.FC<IInput> = ({
  type,
  label,
  required,
  placeholder,
  maxlength,
  minlength,
  pattern,
}) => {
  return (
    <div className={styles.input}>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        minLength={minlength}
        maxLength={maxlength}
        pattern={pattern}
      ></input>
      <label>{label}</label>
    </div>
  );
};
