import React from "react";
import Link from "next/link";
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
    <div className={styles.feed_item} key={props.id}>
      <Link href={`/guides/${props.id}`}>
        <GuideLink
          imgUrl={props.imgUrl}
          title={props.title}
          username={props.username}
          stars={props.stars}
        />
      </Link>
    </div>
  );
};

const GuideLink = React.forwardRef(
  ({ onClick, href, imgUrl, title, username, stars }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <div className={styles.inner}>
          <Image imgUrl={imgUrl} />
          <Details title={title} username={username} stars={stars} />
        </div>
      </a>
    );
  }
);
