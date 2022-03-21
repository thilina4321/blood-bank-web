import React from "react";
import CommonBloodTypes from "./Common";
import BloodInformation from "./Information";
import LearnAboutBloodTitle from "./Title";

const LearnABoutBlood = () => {
  return (
    <div style={{ width: "96%", margin: "auto" }}>
      <LearnAboutBloodTitle />
      <CommonBloodTypes />
      <BloodInformation />
    </div>
  );
};

export default LearnABoutBlood;
