import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const emptyStar = require("../../../public/star_empty.png");
const star = require("../../../public/star.png");

interface Props {
  title: string;
  username: string;
  userId: string;
  stars: number;
  timestamp: number;
}

export const Description: React.FC<Props> = (props) => {
  const [liked, setLiked] = useState(false);
  const [starImg, setStarImg] = useState(emptyStar);

  const [totalStars, setTotalStars] = useState(props.stars);

  useEffect(() => {
    // Check if this article is liked within user model
  }, []);

  function returnStar() {
    if (liked === false) {
      let val = totalStars;
      val++;
      setTotalStars(val);
      setStarImg(star);
    } else {
      let val = totalStars;
      val--;
      setTotalStars(val);
      setStarImg(emptyStar);
    }
    setLiked(!liked);
  }

  return (
    <div className={styles.description}>
      <div className={styles.upperblock}>
        <p className={styles.title}>{props.title}</p>
      </div>
      <div className={styles.lowerblock}>
        <Link href={`/user/${props.userId}`}>
          <a className={styles.username}>{props.username}</a>
        </Link>
        <p className={styles.stars}>{totalStars}</p>
        <div className={styles.img_block} onClick={() => returnStar()}>
          <img className={styles.img} src={starImg} />
        </div>
        <p className={styles.timestamp}>{props.timestamp}</p>
      </div>
    </div>
  );
};
