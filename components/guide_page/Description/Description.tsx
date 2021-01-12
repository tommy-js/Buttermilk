import React from "react";
import styles from "./styles.module.scss";

interface Props {
  description: string;
}

export const Description: React.FC<Props> = (props) => {
  return (
    <div className={styles.description}>
      <h2 className={styles.header}>About</h2>
      <p className={styles.text}>{props.description}</p>
    </div>
  );
};
