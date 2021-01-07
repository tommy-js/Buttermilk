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
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
      <DescriptionInfo stars={props.stars} />
    </div>
  );
};
