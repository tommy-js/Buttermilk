import React from "react";
import { MenuRoute } from "../MenuRoute/MenuRoute";
import styles from "./styles.module.scss";

export const SideMenu: React.FC = () => {
  return (
    <div>
      <MenuRoute path="/profile/followers" text="Followers" />
      <MenuRoute path="/profile/following" text="Following" />
      <MenuRoute path="/profile/guides" text="Guides" />
      <MenuRoute path="/profile/history" text="History" />
      <MenuRoute path="/profile/settings" text="Settings" />
      <MenuRoute path="/profile/spots" text="Spots" />
      <MenuRoute path="/profile/starred" text="Starred" />
      <MenuRoute path="/profile/stories" text="Stories" />
    </div>
  );
};
