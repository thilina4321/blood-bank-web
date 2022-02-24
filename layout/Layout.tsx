import React from "react";
import MainHeader from "./MainHeader";
import classes from "./main.module.css";
import Slider from "./MobileHeader";
import { useRouter } from "next/router";
import Footer from "./Footer";
import { navElementName } from "./routes";
const Layout: React.FC = ({ children }) => {
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
