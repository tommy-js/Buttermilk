import React from "react";
import { TitleEntry } from "../TitleEntry/TitleEntry";
import { ImageUpload } from "../ImageUpload/ImageUpload";
import { ActivityEntry } from "../ActivityEntry/ActivityEntry";
import { Text } from "../Text/Text";
import styles from "./styles.module.scss";

export const GuidesUpload: React.FC = () => {
  return (
    <div className={styles.guides}>
      <TitleEntry />
      <ImageUpload />
      <ActivityEntry />
      <Text />
    </div>
  );
};
