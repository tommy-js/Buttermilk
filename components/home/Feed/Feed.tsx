import React, { useState, useEffect } from "react";
import { FeedItem } from "../feed_item/FeedItem/FeedItem";
import { LoadMore } from "../LoadMore/LoadMore";
import {
  sortByRecent,
  sortByStars,
  updateSearchQuery,
  loadMoreSet,
} from "./index";
import styles from "./styles.module.scss";

const testimg = require("../../../public/test_img.jpg");
const testimg2 = require("../../../public/test_img_2.jpg");
const testimg3 = require("../../../public/test_img_3.jpg");
const testimg4 = require("../../../public/test_img_4.jpg");

interface Props {
  selected: any;
  searchQuery: string;
  searching: boolean;
}

export const Feed: React.FC<Props> = (props) => {
  const test = [
    {
      id: 0,
      title: "Bouldering in the snow",
      username: "James",
      timestamp: 1609972233,
      imgUrl: testimg4,
      stars: 0,
    },
    {
      id: 1,
      title: "Skiing for noobs",
      username: "J22A",
      timestamp: 1609972261,
      imgUrl: testimg,
      stars: 3,
    },
    {
      id: 2,
      title: "Caving at its best",
      username: "Tommy",
      timestamp: 1609972341,
      imgUrl: testimg2,
      stars: 8,
    },
    {
      id: 3,
      title: "Stepping into the unknown",
      username: "Mac",
      timestamp: 1609972346,
      imgUrl: testimg2,
      stars: 8,
    },
    {
      id: 4,
      title: "Bouldering in the Gunks",
      username: "Max",
      timestamp: 1609972352,
      imgUrl: testimg4,
      stars: 2,
    },
    {
      id: 5,
      title: "Hiking the Appalacian Trail",
      username: "Karen",
      timestamp: 1609972012,
      imgUrl: testimg2,
      stars: 64,
    },
    {
      id: 6,
      title: "Mountaineering",
      username: "Jord",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 7,
      title: "Trees",
      username: "44ew",
      timestamp: 1609971245,
      imgUrl: testimg,
      stars: 83,
    },
    {
      id: 8,
      title: "Something else",
      username: "Tommy",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
    {
      id: 9,
      title: "Hiking the Appalacian Trail",
      username: "Karen",
      timestamp: 1609972012,
      imgUrl: testimg2,
      stars: 64,
    },
    {
      id: 10,
      title: "Mountaineering",
      username: "Jord",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 11,
      title: "Trees",
      username: "44ew",
      timestamp: 1609971245,
      imgUrl: testimg,
      stars: 83,
    },
    {
      id: 12,
      title: "Something else",
      username: "Tommy",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
    {
      id: 13,
      title: "Hiking the Appalacian Trail",
      username: "Karen",
      timestamp: 1609972012,
      imgUrl: testimg2,
      stars: 64,
    },
    {
      id: 14,
      title: "Mountaineering",
      username: "Jord",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 15,
      title: "Trees",
      username: "44ew",
      timestamp: 1609971245,
      imgUrl: testimg,
      stars: 83,
    },
    {
      id: 16,
      title: "Something else",
      username: "Tommy",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
    {
      id: 17,
      title: "Hiking the Appalacian Trail",
      username: "Karen",
      timestamp: 1609972012,
      imgUrl: testimg2,
      stars: 64,
    },
    {
      id: 18,
      title: "Mountaineering",
      username: "Jord",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 19,
      title: "Trees",
      username: "44ew",
      timestamp: 1609971245,
      imgUrl: testimg,
      stars: 83,
    },
    {
      id: 20,
      title: "Something else",
      username: "Tommy",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
    {
      id: 21,
      title: "Bouldering in the snow",
      username: "James",
      timestamp: 1609972233,
      imgUrl: testimg4,
      stars: 0,
    },
    {
      id: 22,
      title: "Skiing for noobs",
      username: "J22A",
      timestamp: 1609972261,
      imgUrl: testimg,
      stars: 3,
    },
    {
      id: 23,
      title: "Caving at its best",
      username: "Tommy",
      timestamp: 1609972341,
      imgUrl: testimg2,
      stars: 8,
    },
    {
      id: 24,
      title: "Stepping into the unknown",
      username: "Mac",
      timestamp: 1609972346,
      imgUrl: testimg2,
      stars: 8,
    },
    {
      id: 25,
      title: "Bouldering in the Gunks",
      username: "Max",
      timestamp: 1609972352,
      imgUrl: testimg4,
      stars: 2,
    },
    {
      id: 26,
      title: "Hiking the Appalacian Trail",
      username: "Karen",
      timestamp: 1609972012,
      imgUrl: testimg2,
      stars: 64,
    },
    {
      id: 27,
      title: "Mountaineering",
      username: "Jord",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 28,
      title: "Trees",
      username: "44ew",
      timestamp: 1609971245,
      imgUrl: testimg,
      stars: 83,
    },
    {
      id: 29,
      title: "Something else",
      username: "Tommy",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
    {
      id: 30,
      title: "Hiking the Appalacian Trail",
      username: "Karen",
      timestamp: 1609972012,
      imgUrl: testimg2,
      stars: 64,
    },
    {
      id: 31,
      title: "Mountaineering",
      username: "Jord",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 32,
      title: "Trees",
      username: "44ew",
      timestamp: 1609971245,
      imgUrl: testimg,
      stars: 83,
    },
    {
      id: 33,
      title: "Something else",
      username: "Tommy",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
    {
      id: 34,
      title: "Hiking the Appalacian Trail",
      username: "Karen",
      timestamp: 1609972012,
      imgUrl: testimg2,
      stars: 64,
    },
    {
      id: 35,
      title: "Mountaineering",
      username: "Jord",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 36,
      title: "Trees",
      username: "44ew",
      timestamp: 1609971245,
      imgUrl: testimg,
      stars: 83,
    },
    {
      id: 37,
      title: "Something else",
      username: "Tommy",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
    {
      id: 38,
      title: "Hiking the Appalacian Trail",
      username: "Karen",
      timestamp: 1609972012,
      imgUrl: testimg2,
      stars: 64,
    },
    {
      id: 39,
      title: "Mountaineering",
      username: "Jord",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 40,
      title: "Trees",
      username: "44ew",
      timestamp: 1609971245,
      imgUrl: testimg,
      stars: 83,
    },
    {
      id: 41,
      title: "Something else",
      username: "Tommy",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
    {
      id: 42,
      title: "Bouldering in the snow",
      username: "James",
      timestamp: 1609972233,
      imgUrl: testimg4,
      stars: 0,
    },
    {
      id: 43,
      title: "Skiing for noobs",
      username: "J22A",
      timestamp: 1609972261,
      imgUrl: testimg,
      stars: 3,
    },
    {
      id: 44,
      title: "Caving at its best",
      username: "Tommy",
      timestamp: 1609972341,
      imgUrl: testimg2,
      stars: 8,
    },
    {
      id: 45,
      title: "Stepping into the unknown",
      username: "Mac",
      timestamp: 1609972346,
      imgUrl: testimg2,
      stars: 8,
    },
    {
      id: 46,
      title: "Bouldering in the Gunks",
      username: "Max",
      timestamp: 1609972352,
      imgUrl: testimg4,
      stars: 2,
    },
    {
      id: 47,
      title: "Hiking the Appalacian Trail",
      username: "Karen",
      timestamp: 1609972012,
      imgUrl: testimg2,
      stars: 64,
    },
    {
      id: 48,
      title: "Mountaineering",
      username: "Jord",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 49,
      title: "Trees",
      username: "44ew",
      timestamp: 1609971245,
      imgUrl: testimg,
      stars: 83,
    },
    {
      id: 50,
      title: "Something else",
      username: "Tommy",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
    {
      id: 51,
      title: "Hiking the Appalacian Trail",
      username: "Karen",
      timestamp: 1609972012,
      imgUrl: testimg2,
      stars: 64,
    },
    {
      id: 52,
      title: "Mountaineering",
      username: "Jord",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 53,
      title: "Trees",
      username: "44ew",
      timestamp: 1609971245,
      imgUrl: testimg,
      stars: 83,
    },
    {
      id: 54,
      title: "Something else",
      username: "Tommy",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
    {
      id: 55,
      title: "Hiking the Appalacian Trail",
      username: "Karen",
      timestamp: 1609972012,
      imgUrl: testimg2,
      stars: 64,
    },
    {
      id: 56,
      title: "Mountaineering",
      username: "Jord",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 57,
      title: "Trees",
      username: "44ew",
      timestamp: 1609971245,
      imgUrl: testimg,
      stars: 83,
    },
    {
      id: 58,
      title: "Something else",
      username: "Tommy",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
    {
      id: 59,
      title: "Hiking the Appalacian Trail",
      username: "Karen",
      timestamp: 1609972012,
      imgUrl: testimg2,
      stars: 64,
    },
    {
      id: 60,
      title: "Mountaineering",
      username: "Jord",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 61,
      title: "Trees",
      username: "44ew",
      timestamp: 1609971245,
      imgUrl: testimg,
      stars: 83,
    },
    {
      id: 62,
      title: "Something else",
      username: "Tommy",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
  ];
  const [original] = useState([...test]);
  const [array, setArray] = useState(test.splice(0, 30));
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    if (props.selected.recent === true) setArray(sortByRecent(array));
    else if (props.selected.stars === true) setArray(sortByStars(array));
  }, [props.selected]);

  useEffect(() => {
    if (props.searching === true) {
      setArray(updateSearchQuery(array, props.searchQuery));
    }
  }, [props.searchQuery]);

  useEffect(() => {
    if (array.length === original.length) setShowLoadMore(false);
    else setShowLoadMore(true);
  }, [array]);

  function loadMore() {
    setArray(loadMoreSet(array, original));
  }

  function returnLoadButton() {
    if (showLoadMore === true) {
      return <LoadMore loadMore={loadMore} />;
    } else return null;
  }

  return (
    <div className={styles.feed}>
      {array.map((el: any) => (
        <FeedItem
          id={el.id}
          title={el.title}
          username={el.username}
          timestamp={el.timestamp}
          imgUrl={el.imgUrl}
          stars={el.stars}
          key={el.id}
        />
      ))}
      {returnLoadButton()}
    </div>
  );
};
