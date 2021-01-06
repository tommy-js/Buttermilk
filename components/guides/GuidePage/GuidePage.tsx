import React from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import styles from "./styles.module.scss";

export const GuidePage: React.FC = () => {
  return (
    <div className={styles.guides}>
      <Header />
      <Main />
    </div>
  );
};
