import React, { useEffect } from "react";
import { SpotPage } from "../../components/spot_page/SpotPage/SpotPage";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { useRouter } from "next/router";
const img = require("../../public/boulder1.jpg");

export default function Spot() {
  const test = {
    title: "Boulder test spot",
    username: "Tommy",
    userId: "0",
    id: "342ewe",
    stars: 33,
    description: "This is the test description",
    imgUrl: img,
    timestamp: 1602495695,
    text: [
      {
        text: "This is a test statement for my article page.",
        id: 0,
      },
      {
        text:
          "It should not contain much detail at all considering it's only a basic test",
        id: 1,
      },
    ],
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

  const router = useRouter();

  useEffect(() => {
    console.log(router.query.id);
  }, []);

  return (
    <div>
      <Navbar />
      <SpotPage
        title={test.title}
        id={test.id}
        username={test.username}
        userId={test.userId}
        description={test.description}
        timestamp={test.timestamp}
        stars={test.stars}
        imgUrl={test.imgUrl}
        text={test.text}
        comments={test.comments}
      />
    </div>
  );
}
