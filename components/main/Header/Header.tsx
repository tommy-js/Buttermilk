import React from "react";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.text}>The Modern Adventure Hub</h2>
    </div>
  );
};
