import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    ref?: React.Ref<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({ label, error, ref, ...props }) => {
    return (
        <>
            {label && <label className={styles.label}>{label}</label>}
            <input
                className={`${styles.input} ${error ? styles.error : ""}`}
                ref={ref}
                {...props}
            />
        </>
    );
};