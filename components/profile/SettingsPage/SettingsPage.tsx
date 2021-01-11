import React from "react";
import { TopBar } from "../TopBar/TopBar";
import { SideMenu } from "../SideMenu/SideMenu";
import { UserSettings } from "../UserSettings/UserSettings";
import styles from "./styles.module.scss";

export const SettingsPage: React.FC = () => {
  return (
    <div className={styles.profile_page}>
      <TopBar />
      <SideMenu />
      <UserSettings />
    </div>
  );
};
