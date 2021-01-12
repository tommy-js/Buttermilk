import React from "react";
import { Header } from "../Header/Header";
import { Description } from "../Description/Description";
import { History } from "../History/History";
import { FollowerUser } from "../FollowerUser/FollowerUser";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import styles from "./styles.module.scss";

const test_img = require("../../../public/test_img_2.jpg");

interface Redux {
  status: boolean;
}

const UserProfileState: React.FC<Redux> = (props) => {
  const test = {
    username: "TEST USER",
    userId: "0",
    bio: "A test user :)",
    imgUrl: test_img,
    guides: [
      {
        title: "test1",
      },
    ],
    spots: [
      {
        title: "test2",
      },
    ],
    stories: [
      {
        title: "test3",
      },
    ],
  };

  function returnIfStatus() {
    if (props.status === true) return <FollowerUser />;
    else return null;
  }

  return (
    <div className={styles.user_profile}>
      <Header imgUrl={test.imgUrl} username={test.username} />
      <Description description={test.bio} />
      {returnIfStatus()}
      <History guides={test.guides} spots={test.spots} stories={test.stories} />
    </div>
  );
};

export const UserProfile = connect(mapStateToProps)(UserProfileState);
