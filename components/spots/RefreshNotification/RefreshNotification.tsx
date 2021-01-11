import React from "react";
import styles from "./styles.module.scss";
const update = require("../../../public/update.png");

export const RefreshNotification: React.FC = () => {
  return (
    <div className={styles.refresh_notification}>
      <div className={styles.image_block}>
        <img className={styles.img} src={update} />
      </div>
      <p className={styles.text}>You're at the end of our list</p>
      <p className={styles.text}>Refresh for more</p>
    </div>
  );
};
