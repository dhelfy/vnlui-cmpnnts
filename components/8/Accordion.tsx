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
        <img
          src="arrow_down.svg"
          className={styles.arrow}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
      <p className={`${styles.content} ${isOpen ? styles.open : ""}`}>{text}</p>
    </div>
  );
};
