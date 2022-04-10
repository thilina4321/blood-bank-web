import Link from "next/link";
import { NextRouter } from "next/router";
import React, { Fragment, useState } from "react";
import classes from "./mobile.module.css";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

type props = {
  navElementName: { path: string; name: string }[];
  router: NextRouter;
};

const Slider: React.FC<props> = (props) => {
  const [second, setSecond] = useState(true);

  const { navElementName, router } = props;

  const toggleSlider = () => {
    setSecond(!second);
  };

  return (
    <header className={!second ? classes.header : classes.se__header}>
      <nav
        onClick={toggleSlider}
        className={!second ? classes.nav : classes.se__nav}
      >
        {second ? <MenuOpenIcon /> : "X"}
      </nav>
      {!second && (
        <ul className={classes.elements}>
          {navElementName.map((nvE, ind) => (
            <Fragment key={ind}>
              <Link href={nvE.path}>
                <a
                  onClick={toggleSlider}
                  className={router.pathname == nvE.path ? classes.active : ""}
                >
                  {nvE.name}
                </a>
              </Link>
            </Fragment>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Slider;
