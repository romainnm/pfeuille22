import React from "react";
import { HashLink as Link } from "react-router-hash-link";
/* Data */
import { navLinks } from "../utils/constants";
/* Icons */
import { VscGithub } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";

const HomeHero = () => {
  return (
    <section id="homehero">
      {/* Set hero background image */}
      <img
        src="./assets/img/gc-saturate.jpg"
        alt="hero background-img"
        className="hero-bg"
      />
      <div className="center-content homehero-container">
        <div className="home-text-container">
          <h4>Hi, my name is</h4>
          <h1>Romain Nim</h1>
          <h2>
            Web Designer <span className="light-green">/</span> Front-End Dev
          </h2>
          <h4>
            <span className="light-green">&</span> working on becoming a
            <span className="beige"> Fullstack Dev!</span>
          </h4>
          <hr className="line-separator" />
          <div className="home-icons-container">
            <a
              href="https://github.com/romainnm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/romain-n-a4535128"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <Link
              to={navLinks[3].url}
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              alt={navLinks[3].name}
            >
              <MdEmail />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
