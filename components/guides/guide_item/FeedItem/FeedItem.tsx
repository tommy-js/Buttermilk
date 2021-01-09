import React from "react";
import { Image } from "../Image/Image";
import { Details } from "../Details/Details";
import styles from "./styles.module.scss";

interface Props {
  id: number;
  title: string;
  username: string;
  userId: string;
  shortDesc: string;
  timestamp: number;
  stars: number;
  imgUrl: string;
}

export const FeedItem: React.FC<Props> = (props) => {
  return (
    <div className={styles.feed_item}>
      <div className={styles.inner}>
        <Image imgUrl={props.imgUrl} />
        <Details
          title={props.title}
          username={props.username}
          stars={props.stars}
        />
      </div>
    </div>
  );
};
