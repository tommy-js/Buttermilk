import React from "react";
import styles from "./styles.module.scss";

export const UserStarred: React.FC = () => {
  return (
    <div className={styles.user_starred}>
      <p>Your starred</p>
    </div>
  );
};
