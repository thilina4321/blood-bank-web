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
      data = [
        {
          title: "Blood",
          url: "/resource",
          type: "general",
          id: "62374d09693dcb76aea1682a",
        },
        {
          title: "Donators",
          url: "/commerce",
          type: "more",
          id: "62374e87693dcb76aea1682f",
        },
        // {
        //   title: "Organ and Tissues",
        //   url: "/resource",
        //   type: "general",
        //   id: "62374d09693dcb76aea1682l",
        // },
        // {
        //   title: "Patients",
        //   url: "/commerce",
        //   type: "more",
        //   id: "62374e87693dcb76aea1682k",
        // },
      ];
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
        {fotterTypes.map((mainType, index) => (
          <div className={classes.general} key={index}>
            <h4> {mainType && mainType.toUpperCase()} </h4>
            {fotter.map(
              ({ id, title, type }) =>
                type === mainType && <p key={id}> {title} </p>
            )}
          </div>
        ))}
      </div>
      <div>
        {`Blood bank system web site is more for the donator and the normal people 
        to get the more and more idea.
`}
      </div>
      <h1>hello</h1>
      <div style={{ height: "30px" }}></div>
      <div style={{marginTop:'30px'}}>{`
 

 ©2022 Blood Bank System`}</div>
    </footer>
  );
};

export default Footer;
