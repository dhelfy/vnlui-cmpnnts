import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, error, ref, ...props }) => {
  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={`${styles.input} ${error ? styles.error : ''}`}
        ref={ref}
        {...props}
      />
    </>
  );
};

export default Input;