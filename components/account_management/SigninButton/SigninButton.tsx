import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const SigninButton: React.FC = () => {
  return (
    <div>
      <p className={styles.button_tag}>Already have an account?</p>
      <Link href="/login">
        <a className={styles.button}>Sign In</a>
      </Link>
    </div>
  );
};
