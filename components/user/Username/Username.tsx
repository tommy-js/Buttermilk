import React from "react";
import styles from "./styles.module.scss";

interface Props {
  username: string;
}

export const Username: React.FC<Props> = (props) => {
  return <h1>{props.username}</h1>;
};
