import React from "react";
import { Filter } from "../Filter/Filter";
import { Feed } from "../Feed/Feed";
import styles from "./styles.module.scss";

export const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <Filter />
      <Feed />
    </div>
  );
};
