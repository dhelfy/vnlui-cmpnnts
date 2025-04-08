import styles from "./Button.module.css";

export const Button = ({ children, theme = "dark", className, ref, ...props }) => {
    return (
        <button
            ref={ref} 
            className={`${styles.button} ${styles[theme]} ${className}`} 
            {...props}
        >
            {children}
        </button>
    );
}