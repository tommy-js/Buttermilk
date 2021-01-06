import React from "react";
import styles from "./styles.module.scss";
const main = require("../../../public/main.jpg");

export const BackgroundImg: React.FC = () => {
  return (
    <div className={styles.background_img}>
      <div className={styles.image_container}>
        <img src={main} className={styles.image} />
      </div>
    </div>
  );
};
