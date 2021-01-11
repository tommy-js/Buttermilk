import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { mapStateToProps } from "../../actions/actions";
import { connect } from "react-redux";

interface Redux {
  status: boolean;
  username: string;
}

const ConditionalUsernameState: React.FC<Redux> = (props) => {
  function returnConditionally() {
    if (props.status === true) {
      return (
        <Link href="/profile">
          <a>{props.username}</a>
        </Link>
      );
    } else return null;
  }

  return (
    <div className={styles.conditional_username}>{returnConditionally()}</div>
  );
};

export const ConditionalUsername = connect(mapStateToProps)(
  ConditionalUsernameState
);
