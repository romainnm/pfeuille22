import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectCard({ id, name, thumbnail, skills, projectPath }) {

  return (
    <motion.div layout className="project-card">
      <img src={thumbnail} alt={name} className="project-card-image" />
      <div className="project-card-overlay">
        <div className="project-card-overlay__header">
          <h3>{name}</h3>
          <ul className="project-card-icons-container">
            {skills.map((skill, index) => {
              const {skillName, skillIcon} = skill;
              return (
                <li
                  key={index}
                  className={`project-card-icons ${skillName}`}
                  title={skillName}
                >
                  {skillIcon}
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          to={`${projectPath}/${id}`}
          className="project-card-overlay__button"
        >
          Learn more
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
