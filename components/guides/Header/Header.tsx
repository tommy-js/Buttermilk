import React from "react";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Guides</h2>
      <p className={styles.subtitle}>
        Browse guides to your favorite sports and activities
      </p>
    </div>
  );
};
