import React from "react";
import styles from "./styles.module.scss";

interface Props {
  description: string;
}

export const Description: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.description}</p>
    </div>
  );
};
