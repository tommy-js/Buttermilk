import React from "react";
import styles from "./styles.module.scss";

export const TitleEntry: React.FC = () => {
  return (
    <div className={styles.title_entry}>
      <input className={styles.input} type="text" placeholder="Title..." />
    </div>
  );
};
