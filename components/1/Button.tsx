import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({ children, className, ref, ...props }) => {
    return (
        <button
            ref={ref}
            className={`${styles.button} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};