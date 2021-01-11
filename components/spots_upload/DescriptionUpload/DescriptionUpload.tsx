import React from "react";
import styles from "./styles.module.scss";

export const DescriptionUpload: React.FC = () => {
  return (
    <div className={styles.description_upload}>
      <textarea className={styles.description} placeholder="Description" />
    </div>
  );
};
