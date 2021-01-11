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
          <Link href="/spots/upload">
            <a>Go here</a>
          </Link>
        </p>
      );
    } else return null;
  }

  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Spots</h2>
      <p className={styles.subtitle}>
        Browse and search for locations to do your favorite hobby
      </p>
      {returnContribute()}
    </div>
  );
};

export const Header = connect(mapStateToProps)(HeaderState);
