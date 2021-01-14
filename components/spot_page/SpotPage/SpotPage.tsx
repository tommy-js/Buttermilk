import React from "react";
import { Image } from "../Image/Image";
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

export const SpotPage: React.FC<Props> = (props) => {
  return (
    <div className={styles.spot_page}>
      <Image imgUrl={props.imgUrl} />
      <Description
        title={props.title}
        username={props.username}
        id={props.id}
        userId={props.userId}
        stars={props.stars}
        timestamp={props.timestamp}
      />
      <CommentSection comments={props.comments} />
    </div>
  );
};
