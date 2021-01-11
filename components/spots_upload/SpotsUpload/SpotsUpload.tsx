import React, { useState, useEffect } from "react";
import { TitleEntry } from "../TitleEntry/TitleEntry";
import { ImageUpload } from "../ImageUpload/ImageUpload";
import { ActivityType } from "../ActivityType/ActivityType";
import { DescriptionUpload } from "../DescriptionUpload/DescriptionUpload";
import { Grade } from "../Grade/Grade";
import { Style } from "../Style/Style";
import { BetaUpload } from "../BetaUpload/BetaUpload";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import styles from "./styles.module.scss";

export const SpotsUpload: React.FC = () => {
  const [activityType, setActivityType] = useState(0);

  function returnType() {
    if (activityType === 0) {
      return (
        <div>
          <Grade />
          <Style />
          <BetaUpload />
        </div>
      );
    }
  }

  return (
    <div className={styles.spots_upload}>
      <TitleEntry />
      <ImageUpload />
      <ActivityType />
      <DescriptionUpload />
      {returnType()}
      <SubmitButton />
    </div>
  );
};
