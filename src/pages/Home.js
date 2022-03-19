import React from "react";
// Components
import { HomeHero, KnowMe, ProjectLatest, Contact } from "../components";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <KnowMe />
      <ProjectLatest />
      <Contact />
    </main>
  );
};

export default Home;
