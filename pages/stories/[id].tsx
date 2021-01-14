import React, { useEffect } from "react";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { StoryPage } from "../../components/story_page/StoryPage/StoryPage";
import { useRouter } from "next/router";

export default function Story() {
  const router = useRouter();

  const test = {
    title: "Testing Bouldering Title",
    username: "TommyBoy",
    id: "02eo3k33",
    userId: "88dae9d4-7326-4b5a-a277-78af1f1e5ab5",
    timestamp: 1610118395,
    imgUrl: require("../../public/test_img.jpg"),
    stars: 4,
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

  useEffect(() => {
    console.log(router.query.id);
  }, []);

  return (
    <div>
      <Navbar />
      <StoryPage
        title={test.title}
        username={test.username}
        id={test.id}
        userId={test.userId}
        timestamp={test.timestamp}
        stars={test.stars}
        imgUrl={test.imgUrl}
        text={test.text}
      />
    </div>
  );
}
