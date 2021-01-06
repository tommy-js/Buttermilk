import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Icon: React.FC = () => {
  return (
    <Link href="/stories">
      <h2 className={styles.icon}>Buttermilk</h2>
    </Link>
  );
};
