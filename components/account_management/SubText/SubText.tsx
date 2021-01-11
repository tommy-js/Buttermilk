import React from "react";
import styles from "./styles.module.scss";

interface Props {
  subtext: string;
}

export const SubText: React.FC<Props> = (props) => {
  return <p className={styles.subtext}>{props.subtext}</p>;
};
