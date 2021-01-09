import React from "react";
import { FeedItem } from "../guide_item/FeedItem/FeedItem";
import styles from "./styles.module.scss";
const testimg = require("../../../public/test_img.jpg");
const testimg2 = require("../../../public/test_img_2.jpg");
const testimg3 = require("../../../public/test_img_3.jpg");
const testimg4 = require("../../../public/test_img_4.jpg");

export const Feed: React.FC = () => {
  const test = [
    {
      id: 0,
      title: "Bouldering in the snow",
      username: "James",
      userId: "333",
      shortDesc: "Learn to boulder in the snow with this shortform guide.",
      timestamp: 1609972233,
      imgUrl: testimg4,
      stars: 0,
    },
    {
      id: 1,
      title: "Skiing for noobs",
      username: "J22A",
      userId: "3333rw",
      shortDesc: "Learn to boulder in the snow with this shortform guide.",
      timestamp: 1609972261,
      imgUrl: testimg,
      stars: 3,
    },
    {
      id: 2,
      title: "Caving at its best",
      username: "Tommy",
      userId: "v33da33",
      shortDesc: "Learn to boulder in the snow with this shortform guide.",
      timestamp: 1609972341,
      imgUrl: testimg2,
      stars: 8,
    },
    {
      id: 3,
      title: "Hiking for beginners",
      username: "Mac",
      userId: "fea33",
      shortDesc: "Get started hiking; don't let your nerves stop you!",
      timestamp: 1609972346,
      imgUrl: testimg2,
      stars: 8,
    },
    {
      id: 4,
      title: "Bouldering in the Gunks",
      username: "Max",
      userId: "f3a332222",
      shortDesc: "Get out to your local crags and join in on the fun!",
      timestamp: 1609972352,
      imgUrl: testimg4,
      stars: 2,
    },
    {
      id: 5,
      title: "Hiking the Appalacian Trail",
      username: "Karen",
      userId: "bbrbrn",
      shortDesc:
        "Be prepared for your awesome adventure on the Appalacian Trail.",
      timestamp: 1609972012,
      imgUrl: testimg2,
      stars: 64,
    },
    {
      id: 6,
      title: "Mountaineering",
      username: "Jord",
      userId: "xcxcs",
      shortDesc: "Embrace the more advanced art of mountaineering.",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 7,
      title: "Identify different stone",
      username: "44ew",
      userId: "ngtb",
      shortDesc:
        "Know the differences between rock types to up your climbing game!",
      timestamp: 1609971245,
      imgUrl: testimg,
      stars: 83,
    },
    {
      id: 8,
      title: "Backpacking on Your Own",
      username: "Tommy",
      userId: "3kmdk",
      shortDesc: "Read to learn how to be safe when heading out on your own",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
  ];

  return (
    <div className={styles.feed}>
      {test.map((el: any) => (
        <FeedItem
          id={el.id}
          title={el.title}
          username={el.username}
          userId={el.userId}
          shortDesc={el.shortDesc}
          timestamp={el.timestamp}
          imgUrl={el.imgUrl}
          stars={el.stars}
        />
      ))}
    </div>
  );
};
