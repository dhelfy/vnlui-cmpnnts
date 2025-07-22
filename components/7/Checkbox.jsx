import styles from "./Checkbox.module.css";

export const Checkbox = ({ id, label, ref, ...props }) => {
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