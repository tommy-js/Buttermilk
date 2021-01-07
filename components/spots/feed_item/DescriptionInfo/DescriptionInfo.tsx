import React from "react";
import styles from "./styles.module.scss";

interface Props {
  stars: number;
}

export const DescriptionInfo: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.stars}</p>
    </div>
  );
};
