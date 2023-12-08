import { useState, useEffect } from "react";
import Logo from '../assets/img/outline-text/portfolio.svg'

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
    <section id="portfolio" className="bg-primary">
      <div className="container mx-auto pt-20 pb-10">
        <div className="max-w-[500px] mx-auto text-center relative">
          <h2 className="font-secondary text-3xl font-semibold pt-8">My latest work</h2>
          <p className="text-paragraph text-sm my-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            consequuntur amet, quos voluptatum animi culpa! Ea libero
            exercitationem cupiditate nulla!
          </p>
          <img className="absolute top-0 left-0 w-full" src={Logo} alt="" />
        </div>

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
          {portfolios.map((project, idx) => {
            return <PortfolioItem key={idx} project={project} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
