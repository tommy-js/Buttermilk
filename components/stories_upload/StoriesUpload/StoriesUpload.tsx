import React from "react";
import { Header } from "../Header/Header";
import { ImageUpload } from "../ImageUpload/ImageUpload";
import { ActivityType } from "../ActivityType/ActivityType";
import { Text } from "../Text/Text";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import styles from "./styles.module.scss";

export const StoriesUpload: React.FC = () => {
  return (
    <div className={styles.stories_upload}>
      <Header />
      <ImageUpload />
      <ActivityType />
      <Text />
      <SubmitButton />
    </div>
  );
};
