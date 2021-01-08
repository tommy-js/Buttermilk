import React from "react";
import styles from "./styles.module.scss";

const test = require("../../../public/test_img.jpg");

export const Image: React.FC = () => {
  return (
    <div className={styles.image_container}>
      <img className={styles.image} src={test} />
    </div>
  );
};
