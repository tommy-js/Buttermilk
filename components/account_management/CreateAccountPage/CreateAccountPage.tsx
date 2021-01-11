import React from "react";
import { CreateAccount } from "../CreateAccount/CreateAccount";
import styles from "./styles.module.scss";

export const CreateAccountPage: React.FC = () => {
  return (
    <div className={styles.create_account_page}>
      <CreateAccount />
    </div>
  );
};
