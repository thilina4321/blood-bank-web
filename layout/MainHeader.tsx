import React, { Fragment } from "react";

import classes from "./main.module.css";
import Link from "next/link";
import { NextRouter } from "next/router";
import VaccinesIcon from '@mui/icons-material/Vaccines';

type props = {
  navElementName: {
    path: string;
    name: string;
    subElement: { subName: string; subPath: string }[];
  }[];
  router: NextRouter;
};

const MainHeader: React.FC<props> = (props) => {
  const { navElementName, router } = props;

  const routePath = router.pathname.replace("/", "").split("/")[0];
  console.log('hello');
  

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link href={"/"}>
          <a>
            <VaccinesIcon /> SLBB
          </a>
        </Link>
      </nav>
      <ul className={classes.elements}>
        {navElementName.map((nvE, ind) => (
          <Fragment key={ind}>
            <Link href={nvE.path}>
              <a
                className={`${
                  routePath == nvE.path.replace("/", "") ? classes.active : ""
                } ${classes.hover_items}`}
              >
                {nvE.name}
              </a>
            </Link>
            {nvE.subElement.length > 0 && (
              <div className={classes.menu_items}>
                {nvE.subElement.map((n, i) => (
                  <Fragment key={i}>
                    <Link href={n.subPath}>
                      <a>{n.subName}</a>
                    </Link>
                  </Fragment>
                ))}
              </div>
            )}
          </Fragment>
        ))}
      </ul>
    </header>
  );
};

export default MainHeader;
