import React, { useState } from "react";
import { projects } from "../data";
const PortfolioContext = React.createContext();

const ProjectsProvider = ({ children }) => {
  const projectList = projects;
  const [sortProjectList, setSortProjectList] = useState(projects);
  const [currentNavID, setCurrentNavID] = useState("nav01");
  const [isToggleNavOpen, setIsToggleNavOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  // Get list of all skills
  const getAllSkills = [
    ...new Set(
      projectList
        .map((project) => {
          const skillList = project.skills.map((skill) => {
            return skill;
          });
          return skillList;
        })
        .flat()
    ),
  ];
  // Remove duplicates / unique key-pair of skills
  const projectSkillList = [
    { skillName: "All", skillIcon: null },
    ...new Map(getAllSkills.map((item) => [item["skillName"], item])).values(),
  ];

  const toggleNav = () => {
    setIsToggleNavOpen(!isToggleNavOpen);
  };

  const closeToggleNav = () => {
    setIsToggleNavOpen(false);
  };

  const getNavID = (id) => {
    closeToggleNav();
    setCurrentNavID(id);
  };

  const handleImageClick = (index) => {
    setImgIndex(index);
  };

  const handleSortSkill = (skill) => {
    /*     console.log(skill); */
    if (skill === "All") {
      setSortProjectList(projects);
    } else {
      const newList = projectList.filter((project) =>
        project.skills.some((projectSkill) =>
          projectSkill.skillName.includes(skill)
        )
      );
      setSortProjectList(newList);
    }
  };

  const handlePrevNextClick = (value, totalImages) => {
    if (value === "previous") {
      let newIndex = imgIndex - 1;
      if (newIndex < 0) {
        newIndex = totalImages-1;
      }
      setImgIndex(newIndex);
    }
    if (value === "next") {
      let newIndex = imgIndex + 1;
      if (newIndex >= totalImages) {
        newIndex = 0;
      }
      setImgIndex(newIndex);
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        projectList,
        currentNavID,
        getNavID,
        toggleNav,
        closeToggleNav,
        isToggleNavOpen,
        imgIndex,
        handleImageClick,
        projectSkillList,
        handleSortSkill,
        sortProjectList,
        handlePrevNextClick,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export { ProjectsProvider, PortfolioContext };
