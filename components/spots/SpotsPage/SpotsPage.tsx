import React from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import styles from "./styles.module.scss";

export const SpotsPage: React.FC = () => {
  return (
    <div className={styles.spots}>
      <Header />
      <Main />
    </div>
  );
};
