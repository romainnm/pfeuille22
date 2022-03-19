import React, { useContext } from "react";
import { PortfolioContext } from "../context/project-context";
/* Components */
import ProjectCard from "../components/ProjectCard";
/* Package */
import { motion } from "framer-motion";

const Projects = () => {
  const { sortProjectList, projectSkillList, handleSortSkill } =
    useContext(PortfolioContext);
  const projectPath = "../project";
  return (
    <main id="projects">
      <div className="center-content">
        <h1>
          Projects
          <span className="projects-number">
            (<span>{sortProjectList.length}</span>)
          </span>
        </h1>

        <div className="projects-sort-btn-container">
          {projectSkillList.map((skill, index) => {
            const { skillName, skillIcon } = skill;
            return (
              <button
                key={index}
                type="button"
                className="btn-sort-skill"
                onClick={() => handleSortSkill(skillName)}
              >
                <div className="btn-sort-container">
                  {skillIcon}
                  {skillName}
                </div>
              </button>
            );
          })}
        </div>
        <motion.div layout className="projects-container">
          {sortProjectList.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                {...project}
                projectPath={projectPath}
              />
            );
          })}
        </motion.div>
      </div>
    </main>
  );
};

export default Projects;
