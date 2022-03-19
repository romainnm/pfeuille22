import React, { useContext } from "react";
import { PortfolioContext } from "../context/project-context";
import { Link, useParams } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const SingleProject = () => {
  const { projectList, imgIndex, handleImageClick, handlePrevNextClick } =
    useContext(PortfolioContext);
  const { projectID } = useParams();
  const getProject = projectList.find((project) => project.id === projectID);
  const { name, images, description, skills, livedemo, github, restapi } = getProject;

  return (
    <main>
      <section className="project-container center-content">
        <Link to="/project" className="return-link">
          <HiArrowNarrowLeft />
          Go back to all projects
        </Link>
        <h2>{name}</h2>

        <div className="techandskill">
          <p>Techs & Skills</p>
          <ul className="single-skill-container">
            {skills.map((skill, index) => {
              const { skillName } = skill;
              return (
                <li
                  key={index}
                  title={skillName}
                  className={`bckg-${skillName} skill`}
                >
                  {skillName}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="live-github">
          {livedemo && (
            <a href={livedemo} target="_blank" rel="noopener noreferrer">
              Live Preview
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          )}
          {restapi && (
            <a href={restapi} target="_blank" rel="noopener noreferrer">
              Rest API
            </a>
          )}
        </div>
        {description.map((para, index) => {
          return (
            <p key={index} className="project-description">
              {para}
            </p>
          );
        })}

        <div className="project-images">
          <div className="main-img-container">
            {images.length > 1 && (
              <>
                <button
                  className="prev-image"
                  onClick={() => handlePrevNextClick("previous", images.length)}
                >
                  <MdArrowBackIosNew className="next-prev-icons" />
                </button>
                <button
                  className="next-image"
                  onClick={() => handlePrevNextClick("next", images.length)}
                >
                  <MdArrowForwardIos className="next-prev-icons" />
                </button>
              </>
            )}
            <img
              src={`../${images[imgIndex]}`}
              alt={name}
              className="project-main-img"
            />
          </div>
          <div className="project-thumb-list">
            {images.length !== 0 &&
              images.map((image, index) => {
                if (index !== imgIndex) {
                  return (
                    <div className="project-thumb" key={index}>
                      <img
                        key={index}
                        src={`../${image}`}
                        alt={name}
                        onClick={() => handleImageClick(index)}
                      />
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleProject;
