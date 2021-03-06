import React, { useState, useEffect } from "react";
import Link from "next/link";
import { returnTimestamp } from "./index";
import styles from "./styles.module.scss";

const star = require("../../../public/star.png");
const empty_star = require("../../../public/star_empty.png");

interface Props {
  username: string;
  userId: string;
  timestamp: number;
  text: string;
  stars: number;
  commentId: string;
}

export const Comment: React.FC<Props> = (props) => {
  const [liked, setLiked] = useState(false);
  const [starVal, setStarVal] = useState(props.stars);
  const [img, setImg] = useState(empty_star);

  useEffect(() => {
    // Check user model to see if the user has already liked this comment
  }, []);

  function modStar() {
    if (liked === false) {
      let val = starVal;
      val++;
      setStarVal(val);
      setImg(star);
    } else {
      let val = starVal;
      val--;
      setStarVal(val);
      setImg(empty_star);
    }
    setLiked(!liked);
  }

  return (
    <div className={styles.comment}>
      <Link href={`/user/${props.userId}`}>
        <a className={styles.username}>{props.username}</a>
      </Link>
      <p className={styles.text}>{props.text}</p>
      <div className={styles.interaction}>
        <p className={styles.value}>{starVal}</p>
        <div className={styles.star_img} onClick={() => modStar()}>
          <img className={styles.img} src={img} />
        </div>
        <p className={styles.timestamp}>{returnTimestamp(props.timestamp)}</p>
      </div>
    </div>
  );
};
