import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const AboutUsLink: React.FC = () => {
  return (
    <Link href="/about">
      <a className={styles.about_us_link}>About Us</a>
    </Link>
  );
};
