import React from "react";
import { TopBar } from "../TopBar/TopBar";
import { SideMenu } from "../SideMenu/SideMenu";
import { UserFollowing } from "../UserFollowing/UserFollowing";
import styles from "./styles.module.scss";

export const FollowingPage: React.FC = () => {
  return (
    <div className={styles.profile_page}>
      <TopBar />
      <SideMenu />
      <UserFollowing />
    </div>
  );
};
