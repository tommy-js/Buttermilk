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
  timestamp: number;
  stars: number;
  text: Text[];
}

export const StoryPage: React.FC<Props> = (props) => {
  return (
    <div className={styles.story_page}>
      <Image />
      <Description
        title={props.title}
        username={props.username}
        stars={props.stars}
        timestamp={props.timestamp}
      />
      <MainText text={props.text} />
    </div>
  );
};
