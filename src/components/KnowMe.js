import React from "react";
/* Components */
import About from "./About";
import Skills from "./Skills";
/* Routes */
import { HashLink as Link } from "react-router-hash-link";
/* icons */
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
/* data */
import { knowMeLinks } from "../utils/constants";

const KnowMe = () => {
  const skillLink = knowMeLinks[1];

  return (
    <section id="know-me">
      <div className="center-content">
        <div className="section-title">
          <h1>About Me</h1>
        </div>
          <Link smooth to={skillLink.url} className="knowme-subnav">
            <HiOutlineArrowNarrowDown className="knowme-subnav-icon"/> Learn more about my skills
          </Link>

        <About />
        <Skills />
      </div>
    </section>
  );
};

export default KnowMe;
