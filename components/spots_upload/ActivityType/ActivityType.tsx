import React from "react";
import styles from "./styles.module.scss";

export const ActivityType: React.FC = () => {
  return (
    <div>
      <h3 className={styles.header}>Activity Type</h3>
      <select>
        <option>Rock Climbing</option>
      </select>
    </div>
  );
};
