import React from "react";
import { HistorySpot } from "../HistorySpot/HistorySpot";
import { HistoryStory } from "../HistoryStory/HistoryStory";
import { HistoryGuide } from "../HistoryGuide/HistoryGuide";
import styles from "./styles.module.scss";

interface Props {
  guides: any;
  spots: any;
  stories: any;
}

export const History: React.FC<Props> = (props) => {
  return (
    <div className={styles.history}>
      <h3 className={styles.header}>Spots</h3>
      {props.spots.map((el: any) => (
        <HistorySpot
          title={el.title}
          imgUrl={el.imgUrl}
          timestamp={el.timestamp}
        />
      ))}
      <h3 className={styles.header}>Stories</h3>
      {props.stories.map((el: any) => (
        <HistoryStory
          title={el.title}
          imgUrl={el.imgUrl}
          timestamp={el.timestamp}
        />
      ))}
      <h3 className={styles.header}>Guides</h3>
      {props.guides.map((el: any) => (
        <HistoryGuide
          title={el.title}
          imgUrl={el.imgUrl}
          timestamp={el.timestamp}
        />
      ))}
    </div>
  );
};
