import React from "react";
import { HomeInformationInterface } from "../../component-interfaces/home";
import CardUIComponent from "../../shared/Card";
import classes from "./information.module.css";

// const informations = [
//   {
//     id: 1,
//     image: "/research.jpeg",
//     title: "Title 1",
//     des: "this is the description",
//   },
//   {
//     id: 2,
//     image: "/research.jpeg",
//     title: "Title 2",
//     des: "this is the description",
//   },
//   {
//     id: 3,
//     image: "/research.jpeg",
//     title: "Title 3",
//     des: "this is the description",
//   },
//   {
//     id: 4,
//     image: "/research.jpeg",
//     title: "Title 3",
//     des: "this is the description",
//   },
// ];

const HomeInformation: React.FC<{
  informations: HomeInformationInterface[];
}> = (props) => {
  const { informations } = props;

  return (
    <section className={classes.informations}>
      {informations.map(({ id, imageUrl, title, description }) => (
        <CardUIComponent
          bgColor={true}
          key={id}
          title={title}
          image={imageUrl}
          description={description}
          width={30}
        />
      ))}
    </section>
  );
};

export default HomeInformation;
