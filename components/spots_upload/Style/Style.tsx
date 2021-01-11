import React from "react";
import styles from "./styles.module.scss";

export const Style: React.FC = () => {
  return (
    <div>
      <h3 className={styles.header}>Climbing Type</h3>
      <input
        className={styles.input}
        type="text"
        placeholder="bouldering, sport, etc..."
      />
    </div>
  );
};
