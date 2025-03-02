import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    theme?: "dark" | "light";
}

const Button: FC<ButtonProps> = ({ children, theme = "dark", className, ...props }) => {
    return (
        <button className={`${styles.button} ${styles[theme]} ${className}`} {...props}>
            {children}
        </button>
    );
};