import React from "react";
import Layout from "./Layout";
import About from "./About";
import Intro from "./Intro";
import Timeline from "./Timeline";

import Contact from "./Contact";
import Slick from "./Slick";
import Work from "./Work";
import Card from "./Card";
import Cardcontent from "./Cardcontent";
import Canvaback from "./Canvaback";

const Home = () => {
  return (
    <Layout>
      <Intro />
      <Canvaback />
      <About />
      <Work />

      <Timeline />
      <Cardcontent />

      <Contact />
    </Layout>
  );
};

export default Home;
