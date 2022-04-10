import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import classes from "./youmaylike.module.css";

interface YouMayLikeCom {
  title: string;
  imageUrl: string;
  items: {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
  }[];
  id: string;
}

const HomeYouMayLike = () => {
  const [youMayLike, setYouMayLike] = useState<YouMayLikeCom>();
  const router = useRouter();

  const youMayLikeReq = useHttp({
    url: "/you-may-like",
    method: "get",
    onSucsses: (data: YouMayLikeCom[]) => {
      setYouMayLike(data[0]);
    },
  });

  useEffect(() => {
    youMayLikeReq();
  }, []);

  const onNavHandler = (title: string) => {
    router.push(`/home/you-may-like/${title}`);
  };

  return (
    <section className={classes.section}>
      <div className={classes.sub__section}>
        <img src={youMayLike?.imageUrl} alt={"You may like"} />
      </div>
      <div className={classes.sub__section}>
        <h1> {youMayLike?.title} </h1>
        <div className={classes.likes}>
          {youMayLike?.items.map(({ _id, title, description }) => (
            <div
              onClick={() => onNavHandler(title)}
              key={_id}
              className={classes.like}
            >
              <h2> {title} </h2>
              <p> {description} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeYouMayLike;
