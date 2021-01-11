import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const CreateAccountButton: React.FC = () => {
  return (
    <div className={styles.create_account_button}>
      <p className={styles.button_tag}>Need to join Buttermilk?</p>
      <Link href="/create_account">
        <a className={styles.button}>Create Account</a>
      </Link>
    </div>
  );
};
