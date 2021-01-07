import React from "react";
import styles from "./styles.module.scss";

export const SearchListItems: React.FC = () => {
  return (
    <div className={styles.search_list_items}>
      <div className={styles.container}>
        <label>Stars</label>
        <input type="checkbox" />
      </div>
      <div className={styles.container}>
        <label>Most Recent</label>
        <input type="checkbox" />
      </div>
    </div>
  );
};
