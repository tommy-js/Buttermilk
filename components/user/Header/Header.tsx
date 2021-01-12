import React from "react";
import { ProfileImage } from "../ProfileImage/ProfileImage";
import { Username } from "../Username/Username";
import styles from "./styles.module.scss";

interface Props {
  imgUrl: string;
  username: string;
}

export const Header: React.FC<Props> = (props) => {
  return (
    <div>
      <ProfileImage imgUrl={props.imgUrl} />
      <Username username={props.username} />
    </div>
  );
};
