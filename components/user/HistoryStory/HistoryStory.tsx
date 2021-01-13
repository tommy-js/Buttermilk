import React from "react";
import Link from "next/link";
import { returnDate } from "./index";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  id: string;
  timestamp: number;
  imgUrl: string;
}

export const HistoryStory: React.FC<Props> = (props) => {
  return (
    <Link href={`/stories/${props.id}`} passHref>
      <HistoryLink
        imgUrl={props.imgUrl}
        title={props.title}
        timestamp={props.timestamp}
      />
    </Link>
  );
};

const HistoryLink = React.forwardRef(
  ({ onClick, href, imgUrl, title, timestamp }, ref) => {
    return (
      <a
        className={styles.history_link}
        href={href}
        onClick={onClick}
        ref={ref}
      >
        <div className={styles.guide}>
          <div className={styles.left_block}>
            <div className={styles.image_container}>
              <img className={styles.image} src={imgUrl} />
            </div>
          </div>
          <div className={styles.title_box}>
            <p className={styles.title}>{title}</p>
            <p className={styles.timestamp}>Posted {returnDate(timestamp)}</p>
          </div>
        </div>
      </a>
    );
  }
);
