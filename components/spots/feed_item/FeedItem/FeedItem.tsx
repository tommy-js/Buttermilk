import React from "react";
import { Image } from "../Image/Image";
import { Description } from "../Description/Description";
import styles from "./styles.module.scss";

interface Props {
  id: number;
  title: string;
  subtitle: string;
  imgUrl: string;
  stars: number;
}

export const FeedItem: React.FC<Props> = (props) => {
  return (
    <div className={styles.feed_item} key={props.id}>
      <div className={styles.inner}>
        <Image imgUrl={props.imgUrl} />
        <Description
          title={props.title}
          subtitle={props.subtitle}
          stars={props.stars}
        />
      </div>
    </div>
  );
};
