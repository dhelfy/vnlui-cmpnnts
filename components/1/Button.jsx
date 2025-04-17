import styles from "./Button.module.css";

export const Button = ({ children, className, ref, ...props }) => {
    return (
        <button
            ref={ref}
            className={`${styles.button} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}