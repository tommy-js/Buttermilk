import React from "react";
import { Header } from "../Header/Header";
import { Description } from "../Description/Description";
import { History } from "../History/History";
import { FollowerUser } from "../FollowerUser/FollowerUser";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import styles from "./styles.module.scss";

const test_img = require("../../../public/test_img_2.jpg");

const test_img_2 = require("../../../public/boulder1.jpg");
const test_img_3 = require("../../../public/boulder2.jpg");
const test_img_4 = require("../../../public/boulder3.jpg");

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
        imgUrl: test_img_2,
        timestamp: 2003332322,
      },
    ],
    spots: [
      {
        title: "test2",
        imgUrl: test_img_3,
        timestamp: 2002323322,
      },
    ],
    stories: [
      {
        title: "test3",
        imgUrl: test_img_4,
        timestamp: 2553003322,
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
