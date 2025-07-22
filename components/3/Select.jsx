import { useMemo, useState } from "react";
import styles from "./Select.module.css";

export const Select = ({
  options,
  onChange,
  value,
  placeholder,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const memoizedOptions = useMemo(() => {
    return options.map((option) => (
      <div
        className={styles.option}
        onClick={() => {
          onChange(option);
          setIsOpen(false);
        }}
        key={option}
      >
        {option}
      </div>
    ));
  }, [options, onChange]);

  return (
    <div className={styles.selectWrapper}>
      <div
        className={
          disabled ? `${styles.select} ${styles.disabled}` : styles.select
        }
        onClick={() => {
          if (!disabled) setIsOpen(!isOpen);
        }}
      >
        {value || placeholder || "Select option"}
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M1 1L6 6L11 1" stroke="#616161" />
        </svg>
      </div>

      {isOpen && (
        <div className={styles.optionsContainer}>{memoizedOptions}</div>
      )}
    </div>
  );
};