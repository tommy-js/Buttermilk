import React from "react";
import { DescriptionInfo } from "../DescriptionInfo/DescriptionInfo";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  username: string;
  stars: number;
}

export const Description: React.FC<Props> = (props) => {
  return (
    <div className={styles.description}>
      <div className={styles.outer} />
      <div className={styles.inner}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.subtitle}>{props.username}</p>
        <DescriptionInfo stars={props.stars} />
      </div>
    </div>
  );
};
