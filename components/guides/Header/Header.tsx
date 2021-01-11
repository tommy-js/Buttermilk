import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import styles from "./styles.module.scss";

interface Redux {
  status: boolean;
}

const HeaderState: React.FC<Redux> = (props) => {
  function returnContribute() {
    if (props.status === true) {
      return (
        <p className={styles.contribute}>
          Have something to contribute?{" "}
          <Link href="/guides/upload">
            <a>Go here</a>
          </Link>
        </p>
      );
    } else return null;
  }

  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Guides</h2>
      <p className={styles.subtitle}>
        Browse guides to your favorite sports and activities
      </p>
      {returnContribute()}
    </div>
  );
};

export const Header = connect(mapStateToProps)(HeaderState);
