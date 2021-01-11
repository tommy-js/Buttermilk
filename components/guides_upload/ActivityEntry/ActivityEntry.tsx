import React from "react";
import styles from "./styles.module.scss";

export const ActivityEntry: React.FC = () => {
  return (
    <div className={styles.activity_entry}>
      <h3 className={styles.header}>Activity</h3>
      <select>
        <option>Rock Climbing</option>
      </select>
    </div>
  );
};
