import React from "react";
import styles from "./styles.module.scss";

interface Props {
  imgUrl: string;
}

export const Image: React.FC<Props> = (props) => {
  return (
    <div className={styles.image_container}>
      <img className={styles.image} src={props.imgUrl} />
    </div>
  );
};
