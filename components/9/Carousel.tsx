import { FC, useState } from "react";
import styles from "./Carousel.module.css";

interface CarouselProps {
  urls: string[];
}

export const Carousel: FC<CarouselProps> = ({ urls }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const switchImage = (action: "next" | "prev") => {
    setCurrentItem((prev) => {
      if (action === "next") {
        return (prev + 1) % urls.length;
      }
      return (prev - 1 + urls.length) % urls.length;
    });
  };

  return (
    <div className={styles.carousel}>
      <img
        className={styles.button}
        src="arrow_left.svg"
        alt="left"
        onClick={() => switchImage("prev")}
      />
      <div
        className={styles.content}
        style={{ backgroundImage: `url(${urls[currentItem]})` }}
      ></div>
      <img
        className={styles.button}
        src="arrow_left.svg"
        alt="left"
        style={{ rotate: "180deg" }}
        onClick={() => switchImage("prev")}
      />
    </div>
  );
};
