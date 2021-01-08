import React from "react";
import styles from "./styles.module.scss";

interface Props {
  username: string;
  userId: string;
  text: string;
  stars: number;
  commentId: string;
}

export const Comment: React.FC<Props> = (props) => {
  return (
    <div className={styles.comment}>
      <p className={styles.username}>{props.username}</p>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};
