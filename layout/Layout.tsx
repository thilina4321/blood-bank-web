import React from "react";
import MainHeader from "./MainHeader";
import classes from "./main.module.css";
import Slider from "./MobileHeader";
import { useRouter } from "next/router";

const Layout: React.FC = ({ children }) => {
  const navElementName = [
    { name: "Home", path: "/" },
    { name: "Docs", path: "/project" },
    { name: "Analysis", path: "/" },
  ];
  const router = useRouter();

  return (
    <div>
      <MainHeader router={router}  navElementName={navElementName} />
      <Slider  router={router} navElementName={navElementName}  />

      <main className={classes.main}> {children} </main>
    </div>
  );
};

export default Layout;
