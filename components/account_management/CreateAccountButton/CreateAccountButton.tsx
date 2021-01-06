import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const CreateAccountButton: React.FC = () => {
  return (
    <Link href="/create_account">
      <a>Create Account</a>
    </Link>
  );
};
