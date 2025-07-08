import { FC, useMemo, useState } from "react";
import styles from "./Select.module.css";

interface SelectProps {
  options: string[];
  onChange: (option: string) => void;
  value: string;
  placeholder?: string;
  disabled?: boolean;
}

export const Select: FC<SelectProps> = ({
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
          disabled ? styles.select + " " + styles.disabled : styles.select
        }
        onClick={() => {
          if (!disabled) setIsOpen(!isOpen);
        }}
      >
        {value || placeholder || "Select option"}
        <img
          src="arrow_down.svg"
          alt="arrow"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>

      {isOpen && (
        <div className={styles.optionsContainer}>{memoizedOptions}</div>
      )}
    </div>
  );
};
