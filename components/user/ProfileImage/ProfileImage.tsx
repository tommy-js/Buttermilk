import React from "react";
import styles from "./styles.module.scss";

interface Props {
  imgUrl: string;
}

export const ProfileImage: React.FC<Props> = (props) => {
  return (
    <div className={styles.profile_image}>
      <img className={styles.image} src={props.imgUrl} />
    </div>
  );
};
