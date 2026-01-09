import React from "react";
import ChatApplicationPage from "../assets/images/ChatApplication.png";
import ECommercePage from "../assets/images/ECommercePage.png";
import KrishnaChatBotPage from "../assets/images/KrishnaChatBot.png";
import CheckIcon from "../assets/icons/check-circle.svg";
import Card from "../components/Card";

const PORTFOLIO_PROJECTS = [
  {
    company: "Personal Project",
    year: "2025",
    title: "Real-Time Chat Application",
    results: [
      { title: "Instant messaging using Socket.io" },
      { title: "Secure backend with Express & MongoDB" },
      { title: "Responsive UI using React & Tailwind CSS" },
    ],
    link: "https://whatsapp-clone-cyan-delta.vercel.app/login",
    image: ChatApplicationPage,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "AI Spiritual Chatbot",
    results: [
      { title: "Multilingual spiritual chatbot inspired by Bhagavad Gita" },
      { title: "Text-to-Speech support for English & Hindi responses" },
      { title: "Backend APIs built with Express.js" },
    ],
    link: "https://github.com/AbhishekID01/Krishna-Chat-Bot",
    linkType: "github",
    image: KrishnaChatBotPage,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Modern E-Commerce Web Application",
    results: [
      { title: "e-commerce app with product listing & cart" },
      { title: "Built using React, Tailwind & Context API" },
      { title: "Responsive UI with smooth user experience" },
    ],
    link: "https://collusion-store.vercel.app/",
    image: ECommercePage,
  },
];

const Projects = () => {
  return (
    <section className="pb-16 lg:pb-24" id="Projects">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold text-black tracking-widest text-center">
            Real-world Result
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-black">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-black/80 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 text-black gap-20">
          {PORTFOLIO_PROJECTS.map((project) => (
            <Card
              key={project.title}
              className="bg-white rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-black/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky top-16"
            >
              <div className="absolute inset-0 -z-10 opacity-5"></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className=" text-black inline-flex gap-2 font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="text-black/50 border-t-2 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm text-black/80 md:text-base">
                        <img
                          src={CheckIcon}
                          alt=""
                          className="size-5 md:size-6"
                        />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-black text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center mt-8 cursor-pointer">
                      <span>
                        {project.linkType === "github"
                          ? "View GitHub Repo"
                          : "Visit Live Site"}
                      </span>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
