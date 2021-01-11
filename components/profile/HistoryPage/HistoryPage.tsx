import React from "react";
import { TopBar } from "../TopBar/TopBar";
import { SideMenu } from "../SideMenu/SideMenu";
import { UserHistory } from "../UserHistory/UserHistory";
import styles from "./styles.module.scss";

export const HistoryPage: React.FC = () => {
  return (
    <div className={styles.profile_page}>
      <TopBar />
      <SideMenu />
      <UserHistory />
    </div>
  );
};
