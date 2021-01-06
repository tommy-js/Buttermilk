import React from "react";
import { Header } from "../Header/Header";
import { SubHeader } from "../SubHeader/SubHeader";
import { SubText } from "../SubText/SubText";
import styles from "./styles.module.scss";

export const AboutPage: React.FC = () => {
  return (
    <div className={styles.about_page}>
      <Header />
      <SubHeader />
      <SubText />
    </div>
  );
};
