import React from "react";
import styles from "./styles.module.scss";

export const SubText: React.FC = () => {
  return (
    <div className={styles.subtext}>
      <p className={styles.text}>
        Buttermilk is a site built by rock climbers for the adventurer in all of
        us. Named for the stuningly beautiful Buttermilk Boulders near Bishop,
        California, we aim to provide the best place for people to discuss their
        journeys and share their knowledge.
      </p>
    </div>
  );
};
