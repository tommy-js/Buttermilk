import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  subtitle: string;
}

export const Description: React.FC<Props> = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </div>
  );
};
