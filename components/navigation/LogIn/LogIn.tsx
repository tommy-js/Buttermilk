import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import { connect } from "react-redux";

interface Redux {
  status: boolean;
  onStatusSet: (status: boolean) => void;
}

const LogInState: React.FC<Redux> = (props) => {
  function modifyState() {
    props.onStatusSet(false);
  }

  function returnLogged() {
    if (props.status === true) {
      return <span>Log Out</span>;
    } else return <span>Log In</span>;
  }

  return (
    <Link href="/login">
      <a onClick={() => modifyState()} className={styles.log_in}>
        {returnLogged()}
      </a>
    </Link>
  );
};

export const LogIn = connect(mapStateToProps, mapDispatchToProps)(LogInState);
