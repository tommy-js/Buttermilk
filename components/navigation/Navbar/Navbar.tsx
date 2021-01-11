import React from "react";
import { Icon } from "../Icon/Icon";
import { NavbarLink } from "../NavbarLink/NavbarLink";
import { AboutUsLink } from "../AboutUsLink/AboutUsLink";
import { ConditionalUsername } from "../ConditionalUsername/ConditionalUsername";
import { LogIn } from "../LogIn/LogIn";
import styles from "./styles.module.scss";

export const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Icon />
      <NavbarLink text="Stories" link="/stories" />
      <NavbarLink text="Spots" link="/spots" />
      <NavbarLink text="Guides" link="/guides" />
      <AboutUsLink />
      <LogIn />
      <ConditionalUsername />
    </div>
  );
};
