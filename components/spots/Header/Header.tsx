import React from "react";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Spots</h2>
      <p className={styles.subtitle}>
        Browse and search for locations to do your favorite hobby
      </p>
    </div>
  );
};
