import React from "react";
import styles from "./styles.module.scss";

interface Props {
  image: string;
}

export const Image: React.FC<Props> = (props) => {
  return (
    <div className={styles.image}>
      <img className={styles.image_inner} src={props.image} />
    </div>
  );
};
