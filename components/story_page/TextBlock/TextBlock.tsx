import React from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  id: number;
}

export const TextBlock: React.FC<Props> = (props) => {
  return (
    <div className={styles.text_block} key={props.id}>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};
