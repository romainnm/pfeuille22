import React, { useContext } from "react";
import { PortfolioContext } from "../context/project-context";
import { HashLink } from "react-router-hash-link";
import ProjectCard from "./ProjectCard";

const ProjectLatest = () => {
  const { projectList } = useContext(PortfolioContext);
  // Getting only the last 2 projects
  const latestProjects = projectList.slice(0, 2);
  const projectPath = "project";

  return (
    <section id="project-ft" className="center-content">
      <div className="center-content">
        <h1 className="section-title">Latest projects</h1>
        <div className="projects-ft-container">
          {latestProjects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                {...project}
                projectPath={projectPath}
              />
            );
          })}
        </div>
        <div className="btn-see-more">
          <HashLink smooth to="/project#top" className="btn">
            See More Projects
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default ProjectLatest;
