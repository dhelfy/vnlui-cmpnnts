import styles from "./Button.module.css";

export const Button = ({ children, theme = "dark", className, ...props }) => {
    return (
        <button className={`${styles.button} ${styles[theme]} ${className}`} {...props}>
            {children}
        </button>
    );
}