import { useState } from "react";
import styles from "./Carousel.module.css";

export const Carousel = ({ urls }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const switchImage = (action) => {
    setCurrentItem((prev) => {
      if (action === "next") {
        return (prev + 1) % urls.length;
      }
      return (prev - 1 + urls.length) % urls.length;
    });
  };

  return (
    <div className={styles.carousel}>
      <svg
        width="13"
        height="22"
        viewBox="0 0 13 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => switchImage("prev")}
        className={styles.button}
      >
        <path d="M12 1L2 11L12 21" stroke="#616161" strokeWidth="2" />
      </svg>

      <div
        className={styles.content}
        style={{ backgroundImage: `url(${urls[currentItem]})` }}
      ></div>

      <svg
        width="13"
        height="22"
        viewBox="0 0 13 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => switchImage("next")}
        style={{ transform: "rotate(180deg)" }}
        className={styles.button}
      >
        <path d="M12 1L2 11L12 21" stroke="#616161" strokeWidth="2" />
      </svg>
    </div>
  );
};