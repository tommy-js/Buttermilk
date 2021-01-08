import React from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
}

export const Comment: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
};
