import React from "react";
import { Image } from "../Image/Image";
import { Description } from "../Description/Description";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  id: number;
  subtitle: string;
  timestamp: number;
  imgUrl: string;
  stars: number;
}

export const FeedItem: React.FC<Props> = (props) => {
  return (
    <div className={styles.feed_item}>
      <div className={styles.inner}>
        <Image image={props.imgUrl} />
        <Description title={props.title} subtitle={props.subtitle} />
        <p>{props.title}</p>
      </div>
    </div>
  );
};
