import React from "react";
import styles from "./styles.module.scss";
import { mapStateToProps } from "../../actions/actions";
import { connect } from "react-redux";

interface Redux {
  username: string;
  timestamp: number;
}

const TopBarState: React.FC<Redux> = (props) => {
  return (
    <div className={styles.top_bar}>
      <span className={styles.username}>{props.username}</span>{" "}
      <span className={styles.timestamp}>Member since {props.timestamp}</span>
    </div>
  );
};

export const TopBar = connect(mapStateToProps)(TopBarState);
