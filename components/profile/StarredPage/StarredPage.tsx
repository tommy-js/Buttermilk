import React from "react";
import { TopBar } from "../TopBar/TopBar";
import { SideMenu } from "../SideMenu/SideMenu";
import { Stats } from "../Stats/Stats";
import styles from "./styles.module.scss";

export const StarredPage: React.FC = () => {
  return (
    <div className={styles.profile_page}>
      <TopBar />
      <SideMenu />
      <Stats />
    </div>
  );
};
