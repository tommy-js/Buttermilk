import React from "react";
import styles from "./styles.module.scss";

export const Grade: React.FC = () => {
  return (
    <div>
      <h3 className={styles.header}>Grade</h3>
      <input
        className={styles.input}
        type="text"
        placeholder="V3, 5.12a, etc..."
      />
    </div>
  );
};
