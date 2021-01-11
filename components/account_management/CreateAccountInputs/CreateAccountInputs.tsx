import React from "react";
import styles from "./styles.module.scss";

export const CreateAccountInputs: React.FC = () => {
  return (
    <div className={styles.create_account_inputs}>
      <input className={styles.input} type="text" placeholder="username" />
      <input className={styles.input} type="text" placeholder="password" />
    </div>
  );
};
