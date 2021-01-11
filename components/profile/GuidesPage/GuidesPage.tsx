import React from "react";
import { TopBar } from "../TopBar/TopBar";
import { SideMenu } from "../SideMenu/SideMenu";
import { UserGuides } from "../UserGuides/UserGuides";
import styles from "./styles.module.scss";

export const GuidesPage: React.FC = () => {
  return (
    <div className={styles.profile_page}>
      <TopBar />
      <SideMenu />
      <UserGuides />
    </div>
  );
};
