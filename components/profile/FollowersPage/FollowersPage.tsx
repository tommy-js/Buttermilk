import React from "react";
import { TopBar } from "../TopBar/TopBar";
import { SideMenu } from "../SideMenu/SideMenu";
import { UserFollowers } from "../UserFollowers/UserFollowers";
import styles from "./styles.module.scss";

export const FollowersPage: React.FC = () => {
  return (
    <div className={styles.profile_page}>
      <TopBar />
      <SideMenu />
      <UserFollowers />
    </div>
  );
};
