import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const LogIn: React.FC = () => {
  return (
    <Link href="/signin">
      <a className={styles.log_in}>Log In</a>
    </Link>
  );
};
