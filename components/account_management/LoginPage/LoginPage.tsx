import React from "react";
import { Header } from "../Header/Header";
import { SubText } from "../SubText/SubText";
import { SigninInputs } from "../SigninInputs/SigninInputs";
import { CreateAccountButton } from "../CreateAccountButton/CreateAccountButton";
import styles from "./styles.module.scss";

export const LoginPage: React.FC = () => {
  return (
    <div className={styles.login}>
      <Header />
      <SubText subtext="Log in to your account" />
      <SigninInputs />
      <CreateAccountButton />
    </div>
  );
};
