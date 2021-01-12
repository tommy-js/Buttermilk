import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
}

export const HistoryStory: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  );
};
