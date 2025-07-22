import { useState } from "react";
import styles from "./Avatar.module.css";

export const Avatar = ({ text, img }) => {
  const [statuses, setStatuses] = useState({ isLoaded: false, isError: false });

  const initials = text.slice(0, 2).toUpperCase();

  return (
    <div className={styles.avatar}>
      {img && !statuses.isError ? (
        <>
          {!statuses.isLoaded && <div className={styles.skeleton} />}
          <img
            src={img}
            alt="Avatar"
            loading="lazy"
            onLoad={() => setStatuses((s) => ({ ...s, isLoaded: true }))}
            onError={() => setStatuses((s) => ({ ...s, isError: true }))}
            style={{ display: statuses.isLoaded ? "block" : "none" }}
          />
        </>
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};