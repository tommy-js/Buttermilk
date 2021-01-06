import React from "react";
import styles from "./styles.module.scss";

export const SigninInputs: React.FC = () => {
  return (
    <div>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
    </div>
  );
};
