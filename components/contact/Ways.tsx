import React, { Fragment, useState } from "react";
import { ContactOptionsInterface } from "../../component-interfaces/contact";
import classes from "./ways.module.css";

const ways = [
  { id: 1, way: "Email", value: "slblooddonation@sl.com" },
  { id: 2, way: "Phone Number", value: "+94 76 555 44 33" },
  { id: 3, way: "Fax", value: "+94 76 555 44 33" },
];

const Ways : React.FC<ContactOptionsInterface> = (props) => {
  const [selectNumber, setSelectNumber] = useState(1);

  const {email, fax, phoneNumber} = props

  ways[0].value = email
  ways[1].value = phoneNumber
  ways[2].value = fax


  return (
    <section className={classes.section}>
      <h1> Want to contact us </h1>

      <div className={classes.ways}>
        {ways.map(({ id, way, value }) => (
          <div
            onClick={() =>
              id === selectNumber ? setSelectNumber(0) : setSelectNumber(id)
            }
            key={id}
            className={classes.way}
          >
            {selectNumber === id ? (
              <Fragment>
                <h4> {way} </h4>
                <p> {value} </p>
              </Fragment>
            ) : (
              <h4> {way} </h4>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ways;
