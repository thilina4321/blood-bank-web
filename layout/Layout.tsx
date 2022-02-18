import React from "react";
import MainHeader from "./MainHeader";
import classes from "./main.module.css";
import Slider from "./MobileHeader";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  const navElementName = [
    { name: "Home", path: "/" },
    { name: "Docs", path: "/project" },
    { name: "Banks", path: "/banks" },
    { name: "Analysis", path: "/" },
  ];
  const router = useRouter();

  return (
    <div>
      <MainHeader router={router} navElementName={navElementName} />
      <Slider router={router} navElementName={navElementName} />

      <main className={classes.main}> {children} </main>
      <Footer />
    </div>
  );
};

export default Layout;
