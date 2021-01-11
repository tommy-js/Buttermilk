import React from "react";
import { TopBar } from "../TopBar/TopBar";
import { SideMenu } from "../SideMenu/SideMenu";
import { UserStarred } from "../UserStarred/UserStarred";
import styles from "./styles.module.scss";

export const StarredPage: React.FC = () => {
  return (
    <div className={styles.profile_page}>
      <TopBar />
      <SideMenu />
      <UserStarred />
    </div>
  );
};
