import { FC, useState } from "react";
import styles from "./Accordion.module.css";

interface AccordionProps {
  title?: string;
  text?: string;
}

export const Accordion: FC<AccordionProps> = ({
  title = "Accordion",
  text = "Text",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
        <p>{title}</p>
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          className={styles.arrow}
        >
          <path d="M1 1L6 6L11 1" stroke="#616161" />
        </svg>
      </div>
      <p className={`${styles.content} ${isOpen ? styles.open : ""}`}>{text}</p>
    </div>
  );
};
