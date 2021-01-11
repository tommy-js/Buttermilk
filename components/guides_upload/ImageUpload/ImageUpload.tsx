import React from "react";
import styles from "./styles.module.scss";
const camera = require("../../../public/camera.png");

export const ImageUpload: React.FC = () => {
  return (
    <div className={styles.image_upload}>
      <div className={styles.image_block}>
        <img className={styles.image} src={camera} />
      </div>
      <button>Upload Image</button>
    </div>
  );
};
