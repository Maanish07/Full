import React, { useContext } from "react";
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
import Astro from "./Astro";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";
import Counterup from "./Counterup";
import Profilecount from "./Profilecount";

const Home = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <Layout>
      <Intro />
      <Canvaback />
      <Profilecount />
      <About />
      <Work />

      <Timeline />
      <Cardcontent />

      <Contact />
    </Layout>
  );
};

export default Home;
