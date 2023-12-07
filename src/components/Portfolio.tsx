import { useState, useEffect } from "react";

import { projectsNav } from "../data";
import { projectsData } from "../data";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const [category, setCategory] = useState("all");
  const [activeIdx, setActiveIdx] = useState(0);
  const [portfolios, setPortfolios] = useState(projectsData);

  const handleCategory = (idx: number, category: string) => {
    setCategory(category);
    setActiveIdx(idx);
  };

  useEffect(() => {
    const updatedPortfolios = projectsData.filter((project) => {
      if (category === "all") return true;
      return category === project.category;
    });

    setPortfolios(updatedPortfolios);
  }, [category]);

  return (
    <section className="bg-primary">
      <div className="container mx-auto py-10">
        <ul className="flex flex-col md:flex-row justify-center items-center gap-3">
          {projectsNav.map((project, idx) => {
            return (
              <li
                onClick={() => handleCategory(idx, project.name)}
                className={`${
                  idx === activeIdx ? "text-accent" : ""
                }  hover:text-accent capitalize cursor-pointer px-5 py-2`}
                key={idx}
              >
                {project.name}
              </li>
            );
          })}
        </ul>

        <ul className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-7 text-center">
          {portfolios.map((project,idx) => {
            return (
              <PortfolioItem key={idx} project={project}/>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
