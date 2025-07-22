import { useRef } from "react";
import styles from "./Slider.module.css";

export const Slider = ({ percent, setPercent }) => {
  const sliderRef = useRef(null);

  const onMouseDown = (e) => {
    const onMouseMove = (e) => {
      if (!sliderRef.current) return;
      const slider = sliderRef.current.getBoundingClientRect();
      const coordinates = e.clientX - slider.left;
      setPercent(Math.min(100, Math.max(0, (coordinates / slider.width) * 100)));
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const onTouchStart = (e) => {
    const onTouchMove = (e) => {
      if (!sliderRef.current) return;
      const slider = sliderRef.current.getBoundingClientRect();
      const coordinates = e.touches[0].clientX - slider.left;
      setPercent(Math.min(100, Math.max(0, (coordinates / slider.width) * 100)));
    };

    const onTouchEnd = () => {
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
        style={{ width: `${percent}%` }}
      />
      <div
        className={styles.setter}
        style={{ left: `${percent}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      />
    </div>
  );
};