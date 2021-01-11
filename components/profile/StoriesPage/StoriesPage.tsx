import React from "react";
import { TopBar } from "../TopBar/TopBar";
import { SideMenu } from "../SideMenu/SideMenu";
import { UserStories } from "../UserStories/UserStories";
import styles from "./styles.module.scss";

export const StoriesPage: React.FC = () => {
  return (
    <div className={styles.profile_page}>
      <TopBar />
      <SideMenu />
      <UserStories />
    </div>
  );
};
