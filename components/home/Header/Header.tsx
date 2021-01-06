import React from "react";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Stories</h2>
      <p className={styles.subtitle}>Read adventures published by our users</p>
    </div>
  );
};
