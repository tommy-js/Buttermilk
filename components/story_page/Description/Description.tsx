import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  username: string;
  stars: number;
  timestamp: number;
}

export const Description: React.FC<Props> = (props) => {
  return (
    <div>
      <p>title</p>
    </div>
  );
};
