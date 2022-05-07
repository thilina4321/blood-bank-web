import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { BloodEligibilityKnowMoreInterface } from "../../../component-interfaces/blood";
import CardUIComponent from "../../../shared/Card";
import classes from "./knowmore.module.css";

const EligibilityKnowMore: React.FC<{
  informations: any[];
}> = (props) => {
  const { informations } = props;

  const router = useRouter();

  const onNavigateHandler: (title: string) => void = (title: string) => {
    router.push(`/blood/eligibility/${title}`);
  };

  return (
    <Fragment>
      <h1 className={classes.h1}> Know More About Your Eligibility </h1>
      <section className={classes.informations}>
        {informations.map(({ id, image, title, des }) => (
          <CardUIComponent
            onNavigate={onNavigateHandler}
            bgColor={true}
            key={id}
            title={title}
            image={image}
            description={des}
            width={30}
          />
        ))}
      </section>
    </Fragment>
  );
};

export default EligibilityKnowMore;
