import React from "react";
import styles from "./styles.module.scss";
const wall = require("../../../public/climbing.png");

export const BetaUpload: React.FC = () => {
  return (
    <div className={styles.beta_upload}>
      <h3>Upload Beta(Optional)*</h3>
      <p>Submit a video of you performing the climb for others</p>
      <div className={styles.image_block}>
        <img className={styles.image} src={wall} />
      </div>
    </div>
  );
};
