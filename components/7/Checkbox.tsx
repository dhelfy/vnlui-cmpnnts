import { FC, InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  ref?: React.Ref<HTMLInputElement>;
}

export const Checkbox: FC<CheckboxProps> = ({ id, label, ref, ...props }) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={id}
        className={styles.input}
        ref={ref}
        {...props}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};
