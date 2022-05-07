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
      
    },
  });

  useEffect(() => {
    youMayLikeReq();
  }, []);

  useEffect(()=>{
    const data = [
      {
        title: "You May Like",
        items: [
          {
            title: "Why donate plasma",
            description: `The power of plasma
            "I refer to it as liquid life."
            Diagnosed with hyper IgM syndrome at just five months old, Nick has received 360 infusions from donated plasma over 30 years. It's all thanks to the kindness and generosity of people just like you.`,
            imageUrl: "/research.jpeg",
            _id: "6237eaa9f36a994b04f4cab7",
          },
          {
            title: "How you can give life",
            description: `Whether it's a special occasion or another day at the home-office, it's always a good time to do something amazing for someone else. Check out these ideas that don't require wrapping: they'll make you feel great, and some of them will save lives! .`,
            imageUrl: "/research.jpeg",
            _id: "6237eaa9f36a994b04f4cab9",
          },
        ],
        imageUrl: "/you_may.jpeg",
        id: "6237eaa9f36a994b04f4cab6",
      }
    ];
    setYouMayLike(data[0]);
  }, [])

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
              onClick={() => onNavHandler(_id)}
              key={_id}
              className={classes.like}
            >
              <h2> {title} </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeYouMayLike;
