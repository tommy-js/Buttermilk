import React from "react";
import styles from "./styles.module.scss";
const photos = require("../../../public/camera.png");

export const ImageUpload: React.FC = () => {
  return (
    <div className={styles.image_upload}>
      <div className={styles.image_block}>
        <img src={photos} className={styles.image} />
      </div>
    </div>
  );
};
