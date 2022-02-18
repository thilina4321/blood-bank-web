import Link from "next/link";
import React from "react";
import MyButton from "../../shared/MyButton";
import classes from "./location.module.css";

type props = {
  locations: { district: string; province: string; city: string }[];
};
const Locations: React.FC<props> = (props) => {
  const { locations } = props;
  const locationsFilters = [
    { label: "Province", values: ["Provice", "District", "City"] },
    { label: "District", values: ["Provice", "District", "City"] },
    { label: "City", values: ["Provice", "District", "City"] },
  ];
  return (
    <div className={classes.section}>
      <h1> Locations </h1>
      <div className={classes.filter}>
        {locationsFilters.map(({ label, values }, ind) => (
          <div key={ind} className={classes.district}>
            <label className={classes.label} htmlFor="Distric">
              {label}
            </label>
            <select className={classes.select} name="" id="">
              {values.map((val, index) => (
                <option key={index} value="">
                  {val}
                </option>
              ))}
            </select>
          </div>
        ))}
        <div style={{ width: "30%", textAlign: "end", flex: "1" }}>
          <MyButton name="Filter" />
        </div>
      </div>

      <div className={classes.section__sub}>
        {locations.map(({ district, city, province }, index) => (
          <div key={index} className={classes.card}>
            <h3> {district} </h3>
            <p> {city} </p>
            <p> {province} </p>
            <Link href={"/location/" + city}>
              <a style={{ color: "blue" }}> Reach to location </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
