import React from "react";
import { TopBar } from "../TopBar/TopBar";
import { SideMenu } from "../SideMenu/SideMenu";
import { UserSpots } from "../UserSpots/UserSpots";
import styles from "./styles.module.scss";

export const SpotsPage: React.FC = () => {
  return (
    <div className={styles.profile_page}>
      <TopBar />
      <SideMenu />
      <UserSpots />
    </div>
  );
};
