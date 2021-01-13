import React from "react";
import styles from "./styles.module.scss";

interface Props {
  username: string;
}

export const Username: React.FC<Props> = (props) => {
  return (
    <div className={styles.username}>
      <span className={styles.inner}>{props.username}</span>
    </div>
  );
};
