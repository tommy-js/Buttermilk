import React from "react";
import Link from "next/link";
import { Image } from "../Image/Image";
import { Description } from "../Description/Description";
import styles from "./styles.module.scss";

interface Props {
  id: number;
  title: string;
  username: string;
  imgUrl: string;
  stars: number;
}

export const FeedItem: React.FC<Props> = (props) => {
  return (
    <div className={styles.feed_item} key={props.id}>
      <Link href={`/spots/${props.id}`}>
        <SpotsLink
          imgUrl={props.imgUrl}
          title={props.title}
          username={props.username}
          stars={props.stars}
        />
      </Link>
    </div>
  );
};

const SpotsLink = React.forwardRef(
  ({ onClick, href, imgUrl, title, username, stars }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <div className={styles.inner}>
          <Image imgUrl={imgUrl} />
          <Description title={title} username={username} stars={stars} />
        </div>
      </a>
    );
  }
);
