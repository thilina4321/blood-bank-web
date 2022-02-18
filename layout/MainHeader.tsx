import React, { Fragment } from "react";

import classes from "./main.module.css";
import Link from "next/link";
import { NextRouter } from "next/router";

type props = {
  navElementName: {path:string, name:string} [];
  router:NextRouter
};

const MainHeader: React.FC<props> = (props) => {
  const { navElementName , router} = props;

  return (
    <header className={classes.header}>
      <nav className={classes.nav}> <Link href={'/'}>Brand</Link> </nav>
      <ul className={classes.elements}>
        {navElementName.map((nvE, ind) => (
          <Fragment key={ind}>
            <Link href={nvE.path}>
              <a className={router.pathname == nvE.path ? classes.active : ""}>
                {nvE.name}
              </a>
            </Link>
          </Fragment>
        ))}
      </ul>
    </header>
  );
};

export default MainHeader;
