import React from "react";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <input className={styles.text} type="text" placeholder="Title..." />
    </div>
  );
};
