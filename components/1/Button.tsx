import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    theme?: "dark" | "light";
    ref?: React.Ref<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({ children, theme = "dark", className, ref, ...props }) => {
    return (
        <button
            ref={ref}
            className={`${styles.button} ${styles[theme]} ${className}`} 
            {...props}
        >
            {children}
        </button>
    );
};