import React from "react";
import styles from "./styles.module.scss";

const starImg = require("../../../../public/star.png");

interface Props {
  title: string;
  username: string;
  stars: number;
}

export const Details: React.FC<Props> = (props) => {
  return (
    <div className={styles.details}>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.username}>{props.username}</p>
      <div className={styles.img_container}>
        <img className={styles.img} src={starImg} />
      </div>
      <p className={styles.stars}>{props.stars}</p>
    </div>
  );
};
