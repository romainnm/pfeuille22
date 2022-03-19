import React from "react";
/* Components */
import ProgressBar from "./ProgressBar";
/* Data */
import { devSkills, creativeSkills, toolbox } from "../utils/constants";

const Skills = () => {
  return (
    <article id="skills">
      <h2 className="subsection-title">Skills</h2>
      <p>
        Currently learning <strong>NodeJS / Express / MongoDB+Mongoose</strong>
      </p>
      <div className="skills-container">
        <article>
          <h3>Development Tools</h3>
          {devSkills.map((skill, index) => {
            const { name, completed, bgcolor } = skill;
            return (
              <ProgressBar
                key={index}
                name={name}
                completed={completed}
                bgcolor={bgcolor}
              />
            );
          })}
        </article>
        <article>
          <h3>Creative Tools</h3>
          {creativeSkills.map((skill, index) => {
            const { name, completed, bgcolor } = skill;
            return (
              <ProgressBar
                key={index}
                name={name}
                completed={completed}
                bgcolor={bgcolor}
              />
            );
          })}
        </article>
      </div>
      <article className="toolbox">
        <h3>Somewhat dusty, but also in my toolbox</h3>
        <ul className="toolbox-list">
          {toolbox.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </article>
    </article>
  );
};

export default Skills;
