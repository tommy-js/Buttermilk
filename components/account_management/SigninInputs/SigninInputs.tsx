import React from "react";
import styles from "./styles.module.scss";

export const SigninInputs: React.FC = () => {
  return (
    <div className={styles.signin_inputs}>
      <input className={styles.input} type="text" placeholder="username" />
      <input className={styles.input} type="text" placeholder="password" />
    </div>
  );
};
