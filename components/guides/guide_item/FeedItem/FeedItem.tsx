import React from "react";
import styles from "./styles.module.scss";

interface Props {
  id: number;
  title: string;
  username: string;
  shortDesc: string;
  timestamp: number;
  stars: number;
  imgUrl: string;
}

export const FeedItem: React.FC<Props> = (props) => {
  return (
    <div className={styles.feed_item}>
      <div className={styles.inner}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};
