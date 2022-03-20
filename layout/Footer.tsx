import React, { Fragment, useEffect, useState } from "react";
import { FotterInterface } from "../component-interfaces/fotter";
import useHttp from "../hooks/useHttp";
import classes from "./fotter.module.css";

const Footer = () => {
  const [fotter, setFotter] = useState<FotterInterface[]>([]);
  const [fotterTypes, setFotterTypes] = useState<string[]>([]);

  const fotterReq = useHttp({
    url: "/fotter",
    method: "get",
    onSucsses: (data: FotterInterface[]) => {
      setFotter(data);
    },
  });

  useEffect(() => {
    fotterReq();
  }, []);

  useEffect(() => {
    let fotterTypesObj: { [x: string]: string } = {};
    const fotterTypeArr: string[] = [];
    if (fotter.length > 0) {
      fotter.forEach((element) => {
        fotterTypesObj[element.title] = element.type;
      });
    }
    for (const key in fotterTypesObj) {
      if (Object.prototype.hasOwnProperty.call(fotterTypesObj, key)) {
        fotterTypeArr.push(fotterTypesObj[key]);
      }
    }

    setFotterTypes(fotterTypeArr);
  }, [fotter]);


  return (
    <footer className={classes.footer}>
      <div className={classes.footer}>
        {fotterTypes.map((type, index) => (
          <div className={classes.general} key={index}>
            <h4> {type} </h4>
            {fotter.map(({ id, title }) => (
              <p key={id}> {title} </p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
