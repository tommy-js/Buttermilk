import React from "react";
import { Image } from "../Image/Image";
import { Description } from "../Description/Description";
import { MainText } from "../MainText/MainText";
import styles from "./styles.module.scss";

interface Text {
  text: string;
  id: number;
}

interface Props {
  title: string;
  username: string;
  userId: string;
  timestamp: number;
  stars: number;
  imgUrl: string;
  text: Text[];
}

export const StoryPage: React.FC<Props> = (props) => {
  return (
    <div className={styles.story_page}>
      <Image imgUrl={props.imgUrl} />
      <Description
        title={props.title}
        username={props.username}
        userId={props.userId}
        stars={props.stars}
        timestamp={props.timestamp}
      />
      <MainText text={props.text} />
    </div>
  );
};
