import React from "react";
import styles from "./styles.module.scss";
const star = require("../../../../public/star.png");

interface Props {
  stars: number;
}

export const DescriptionInfo: React.FC<Props> = (props) => {
  return (
    <div className={styles.description_info}>
      <div className={styles.image_block}>
        <img className={styles.image} src={star} />
      </div>
      <span className={styles.stars}>{props.stars}</span>
    </div>
  );
};
