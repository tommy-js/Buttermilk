import React from "react";
import { Image } from "../Image/Image";
import { Details } from "../Details/Details";
import { Description } from "../Description/Description";
import { CommentSection } from "../CommentSection/CommentSection";
import styles from "./styles.module.scss";
const img = require("../../../public/boulder1.jpg");

export const GuidePage = () => {
  const test = {
    title: "Test Guide",
    username: "Tommy",
    userId: "0",
    stars: 33,
    description: "This is the test description",
    imgUrl: img,
    timestamp: 1602495695,
    comments: [
      {
        username: "Ty",
        userId: "0",
        text: "Testing comment 1",
        timestamp: 1610149017,
        stars: 2,
        commentId: "22",
      },
      {
        username: "fTy",
        userId: "03",
        text: "Testing comment 1",
        timestamp: 1610149565,
        stars: 26,
        commentId: "3f21",
      },
      {
        username: "Ty3",
        userId: "0e2",
        text: "Testing comment 1",
        timestamp: 1610129017,
        stars: 4,
        commentId: "2112",
      },
    ],
  };

  return (
    <div className={styles.guide_page}>
      <Image imgUrl={test.imgUrl} />
      <Details
        title={test.title}
        username={test.username}
        userId={test.userId}
        stars={test.stars}
        timestamp={test.timestamp}
      />
      <Description description={test.description} />
      <CommentSection comments={test.comments} />
    </div>
  );
};
