import React, { useEffect } from "react";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { StoryPage } from "../../components/story_page/StoryPage/StoryPage";
import { useRouter } from "next/router";

export default function Story() {
  const router = useRouter();

  const test = {
    title: "Testing Bouldering Title",
    username: "TommyBoy",
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
        userId={test.userId}
        timestamp={test.timestamp}
        stars={test.stars}
        imgUrl={test.imgUrl}
        text={test.text}
      />
    </div>
  );
}
