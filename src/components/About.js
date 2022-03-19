import React from "react";

const About = () => {
  return (
    <article id="about">
      <div className="about-container">
        <div className="about-pic">
          <img src="./assets/img/Polaroid_pic.jpg" alt="profile-small" />
        </div>
        <div className="about-description">
          <p>
            Hello! My name is Romain. I received my bachelor's in Web Design at
            CIFACOM, a multimedia school located in Paris, France. There I
            learned to use a user-centered design approach to build user
            interfaces (use of personas and web accessibility), but also by
            being mindful of the development team by building design guidelines.
          </p>

          <p>
            I create designs that are visually meaningful and organized.
            In that regard, it is important for me to start a project focusing
            on color, font and interface interactivity to ensure consistency
            throughout a project.
          </p>
          <p>
            My main weapons of choice are usually a piece of paper, a pen, and
            lots of mockups/doodles (yep, it's free and fast!). But, for
            professional projects, my to go tools' are Photoshop or Adobe XD.
          </p>
          <p>
            Although everything started with me being more interested in the
            visual part of web development, I am now shifting my interest to
            front-end development because it brings me an other set of
            challenges that I enjoy.
          </p>
          <p>
            Currently I am polishing my skills by learning JavaScript and
            ReactJS to complement my knowledge of HTML/CSS. I am also exploring
            what back-end development has to offer by learning Express and
            MongoDB.
          </p>
        </div>
      </div>
    </article>
  );
};

export default About;
