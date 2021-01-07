import React from "react";
import { DescriptionInfo } from "../DescriptionInfo/DescriptionInfo";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  subtitle: string;
  stars: number;
}

export const Description: React.FC<Props> = (props) => {
  return (
    <div className={styles.description}>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.subtitle}>{props.subtitle}</p>
      <DescriptionInfo stars={props.stars} />
    </div>
  );
};
