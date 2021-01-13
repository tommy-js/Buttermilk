import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  timestamp: string;
  imgUrl: string;
}

export const HistoryGuide: React.FC<Props> = (props) => {
  return (
    <div>
      <div className={styles.left_block}>
        <div className={styles.image_container}>
          <img className={styles.image} src={props.imgUrl} />
        </div>
      </div>
      <div className={styles.title_box}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.timestamp}>{props.timestamp}</p>
      </div>
    </div>
  );
};
