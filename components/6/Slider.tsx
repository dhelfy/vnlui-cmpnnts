import { FC, useRef } from "react";
import styles from "./Slider.module.css";

interface SliderProps {
  percent: number;
  setPercent: (value: number) => void;
}

export const Slider: FC<SliderProps> = ({ percent, setPercent }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const onMouseMove = (e: MouseEvent) => {
      if (!sliderRef.current) return;
      const slider = sliderRef.current.getBoundingClientRect();
      const coordinates = e.clientX - slider.left;
      setPercent(
        Math.min(100, Math.max(0, (coordinates / slider.width) * 100))
      );
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const onTouchMove = (e: TouchEvent) => {
      if (!sliderRef.current) return;
      const slider = sliderRef.current.getBoundingClientRect();
      const coordinates = e.touches[0].clientX - slider.left;
      setPercent(
        Math.min(100, Math.max(0, (coordinates / slider.width) * 100))
      );
    };

    const onTouchEnd = (e: TouchEvent) => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
  };

  return (
    <div className={styles.slider} ref={sliderRef}>
      <div
        className={styles.percentBar}
        style={{
          width: `${percent}%`,
        }}
      />
      <div
        className={styles.setter}
        style={{
          left: `${percent}%`,
        }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      />
    </div>
  );
};
