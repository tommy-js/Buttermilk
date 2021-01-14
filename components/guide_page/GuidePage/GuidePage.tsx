import React from "react";
import { Image } from "../Image/Image";
import { Details } from "../Details/Details";
import { Description } from "../Description/Description";
import { CommentSection } from "../CommentSection/CommentSection";
import styles from "./styles.module.scss";

interface Text {
  text: string;
  id: number;
}

interface Props {
  title: string;
  id: string;
  username: string;
  userId: string;
  description: string;
  timestamp: number;
  stars: number;
  imgUrl: string;
  text: Text[];
  comments: any;
}

export const GuidePage: React.FC<Props> = (props) => {
  return (
    <div className={styles.guide_page}>
      <Image imgUrl={props.imgUrl} />
      <Details
        title={props.title}
        username={props.username}
        id={props.id}
        userId={props.userId}
        stars={props.stars}
        timestamp={props.timestamp}
      />
      <Description description={props.description} />
      <CommentSection comments={props.comments} />
    </div>
  );
};
