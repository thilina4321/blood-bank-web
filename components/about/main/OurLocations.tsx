import React, { useState } from "react";
import {
  AboutMainLocationProps,
  AboutMainLocation,
} from "../../../component-interfaces/about";
import classes from "./ourlocations.module.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

const locations: AboutMainLocation[] = [
  {
    id: 1,
    long: 79.97769862781902,
    lat: 6.950031519764486,
    name: "Biyagama",
    address: "124, sapumal road, Manel MW",
    number: "+94 763334444",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.005470009979!2d79.977698627819!3d6.950031519764475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25677ddae5c43%3A0x541d92dd5945da68!2sBiyagama!5e0!3m2!1sen!2slk!4v1646989852595!5m2!1sen!2slk",
  },
  {
    id: 2,
    long: 151.20929,
    lat: -33.86882,
    name: "Kaduwela",
    address: "345, kaduwela, Mavinna",
    number: "+94 763334422",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.1027903221!2d150.65178958903746!3d-33.84735669427987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2slk!4v1646989452729!5m2!1sen!2slk",
  },
  {
    id: 3,
    long: 79.97769862781902,
    lat: 6.950031519764486,
    name: "Kekirawa",
    address: "456, kekirawa, helathna",
    number: "+94 763334466",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.005470009979!2d79.977698627819!3d6.950031519764475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25677ddae5c43%3A0x541d92dd5945da68!2sBiyagama!5e0!3m2!1sen!2slk!4v1646989852595!5m2!1sen!2slk",
  },
  {
    id: 4,
    long: 151.20929,
    lat: -33.86882,
    name: "Mawaramandiya",
    address: "12/1, gaga road, Mawaramandiya",
    number: "+94 763334457",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.1027903221!2d150.65178958903746!3d-33.84735669427987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2slk!4v1646989452729!5m2!1sen!2slk",
  }
];

console.log("log");
console.log("log 1");


const AboutOurLocations: React.FC<AboutMainLocationProps> = (props) => {
  const { isTitle = true } = props;

  const [location, setLocation] = useState(locations[0].location);
  const [activeNumber, setActiveNumber] = useState(1);

  const setLocationHandler = (id: number) => {
    const findLocation = locations.find((loc) => loc.id === id);

    if (!findLocation) {
      return;
    }

    setLocation(findLocation.location);
    setActiveNumber(id);
  };

  return (
    <section className={classes.section}>
      <h1>
        <AddLocationAltIcon fontSize="large" /> Blood Centers
      </h1>

      {isTitle && <h1> Our Locations </h1>}

      <div className={classes.locations}>
        <div className={classes.details}>
          {locations.map(({ id, name, number, address }) => (
            <div
              onClick={() => setLocationHandler(id)}
              className={`${classes.detail} ${
                activeNumber === id
                  ? classes.hover_active
                  : classes.hover_inactive
              }`}
              key={id}
            >
              <p> {name} </p>
              <p> {address} </p>
              <p> {number} </p>
            </div>
          ))}
        </div>

        <div className={classes.map}>
          <iframe
            src={location}
            width="600"
            height="600"
            style={{ border: "0", width: "100%" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutOurLocations;
