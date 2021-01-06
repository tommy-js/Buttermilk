import React from "react";
import { Header } from "../Header/Header";
import { SubText } from "../SubText/SubText";
import { SigninInputs } from "../SigninInputs/SigninInputs";
import styles from "./styles.module.scss";

export const LoginPage: React.FC = () => {
  return (
    <div className={styles.login}>
      <Header />
      <SubText />
      <SigninInputs />
    </div>
  );
};
