import React from "react";
import styles from "./styles.module.scss";

export const Text: React.FC = () => {
  return (
    <div className={styles.text}>
      <textarea className={styles.textarea} placeholder="Text..." />
    </div>
  );
};
