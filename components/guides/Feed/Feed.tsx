import React, { useState, useEffect } from "react";
import { FeedItem } from "../guide_item/FeedItem/FeedItem";
import { RefreshNotification } from "../RefreshNotification/RefreshNotification";
import { LoadMore } from "../filter_items/LoadMore/LoadMore";
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
  modSearching: () => void;
}

export const Feed: React.FC<Props> = (props) => {
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
    {
      id: 9,
      title: "Skiing for noobs",
      username: "J22A",
      userId: "3333rw",
      shortDesc: "Learn to boulder in the snow with this shortform guide.",
      timestamp: 1609972261,
      imgUrl: testimg,
      stars: 3,
    },
    {
      id: 10,
      title: "Caving at its best",
      username: "Tommy",
      userId: "v33da33",
      shortDesc: "Learn to boulder in the snow with this shortform guide.",
      timestamp: 1609972341,
      imgUrl: testimg2,
      stars: 8,
    },
    {
      id: 11,
      title: "Hiking for beginners",
      username: "Mac",
      userId: "fea33",
      shortDesc: "Get started hiking; don't let your nerves stop you!",
      timestamp: 1609972346,
      imgUrl: testimg2,
      stars: 8,
    },
    {
      id: 12,
      title: "Bouldering in the Gunks",
      username: "Max",
      userId: "f3a332222",
      shortDesc: "Get out to your local crags and join in on the fun!",
      timestamp: 1609972352,
      imgUrl: testimg4,
      stars: 2,
    },
    {
      id: 13,
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
      id: 14,
      title: "Mountaineering",
      username: "Jord",
      userId: "xcxcs",
      shortDesc: "Embrace the more advanced art of mountaineering.",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 15,
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
      id: 16,
      title: "Backpacking on Your Own",
      username: "Tommy",
      userId: "3kmdk",
      shortDesc: "Read to learn how to be safe when heading out on your own",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
    {
      id: 17,
      title: "Skiing for noobs",
      username: "J22A",
      userId: "3333rw",
      shortDesc: "Learn to boulder in the snow with this shortform guide.",
      timestamp: 1609972261,
      imgUrl: testimg,
      stars: 3,
    },
    {
      id: 18,
      title: "Caving at its best",
      username: "Tommy",
      userId: "v33da33",
      shortDesc: "Learn to boulder in the snow with this shortform guide.",
      timestamp: 1609972341,
      imgUrl: testimg2,
      stars: 8,
    },
    {
      id: 19,
      title: "Hiking for beginners",
      username: "Mac",
      userId: "fea33",
      shortDesc: "Get started hiking; don't let your nerves stop you!",
      timestamp: 1609972346,
      imgUrl: testimg2,
      stars: 8,
    },
    {
      id: 20,
      title: "Bouldering in the Gunks",
      username: "Max",
      userId: "f3a332222",
      shortDesc: "Get out to your local crags and join in on the fun!",
      timestamp: 1609972352,
      imgUrl: testimg4,
      stars: 2,
    },
    {
      id: 21,
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
      id: 22,
      title: "Mountaineering",
      username: "Jord",
      userId: "xcxcs",
      shortDesc: "Embrace the more advanced art of mountaineering.",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 23,
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
      id: 24,
      title: "Backpacking on Your Own",
      username: "Tommy",
      userId: "3kmdk",
      shortDesc: "Read to learn how to be safe when heading out on your own",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
  ];
  const [original] = useState([...test]);
  const [pairedDown, setPairedDown] = useState([...test]);
  const [array, setArray] = useState(test.splice(0, 10));
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    if (props.selected.recent === true) setArray(sortByRecent(array));
    else if (props.selected.stars === true) setArray(sortByStars(array));
  }, [props.selected]);

  useEffect(() => {
    if (props.searching === true) {
      let searched = updateSearchQuery(original, props.searchQuery);
      if (searched.length > 10) {
        let spliced = searched.splice(0, 10);
        setPairedDown(searched);
        setArray(spliced);
        props.modSearching();
        setShowLoadMore(true);
      } else setArray(searched);
    }
  }, [props.searchQuery]);

  useEffect(() => {
    if (array.length === pairedDown.length) setShowLoadMore(false);
    else setShowLoadMore(true);
  }, [array]);

  function loadMore() {
    setArray(loadMoreSet(array, pairedDown));
  }

  function returnLoadButton() {
    if (showLoadMore === true && props.searching === false) {
      return <LoadMore loadMore={loadMore} />;
    } else return <RefreshNotification />;
  }

  return (
    <div className={styles.feed}>
      {array.map((el: any) => (
        <FeedItem
          id={el.id}
          title={el.title}
          username={el.username}
          userId={el.userId}
          shortDesc={el.shortDesc}
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
