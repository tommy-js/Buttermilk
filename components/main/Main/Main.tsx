import React from "react";
import { BackgroundImg } from "../BackgroundImg/BackgroundImg";
import { Header } from "../Header/Header";
import { GoButton } from "../GoButton/GoButton";
import { AboutUsLink } from "../AboutUsLink/AboutUsLink";
import styles from "./styles.module.scss";

export const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <BackgroundImg />
      <Header />
      <GoButton />
      <AboutUsLink />
    </div>
  );
};
