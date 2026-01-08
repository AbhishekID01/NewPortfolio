import React from "react";
import darkSaasLandingPage from "../assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "../assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "../assets/images/ai-startup-landing-page.png";
import CheckIcon from "../assets/icons/check-circle.svg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];
const Projects = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <p className="uppercase font-semibold tracking-widest text-center text-black">
          Real-world Result
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-black">
          Featured Projects
        </h2>
        <p className="text-center text-black/90 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          See how I transformed concept into engaging digital experiences.
        </p>
        <div className="md:mt-20 flex flex-col mt-10 px-2 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white text-black rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-black/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div>
                  <div className="bg-red-200 inline-flex gap-2 font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-black/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base">
                        <img
                          src={CheckIcon}
                          alt=""
                          className="size-5 md:size-6"
                        />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-black text-white/90 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center mt-8 md:w-auto px-6">
                      Visit Live Site
                    </button>
                  </a>
                </div>
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;  