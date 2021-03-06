import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";

interface Redux {
  status: boolean;
}

const HeaderState: React.FC<Redux> = (props) => {
  function returnContribute() {
    if (props.status === true) {
      return (
        <p className={styles.contribute}>
          Have something to contribute?{" "}
          <Link href="/stories/upload">
            <a>Go here</a>
          </Link>
        </p>
      );
    } else return null;
  }

  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Stories</h2>
      <p className={styles.subtitle}>Read adventures published by our users</p>
      {returnContribute()}
    </div>
  );
};

export const Header = connect(mapStateToProps)(HeaderState);
