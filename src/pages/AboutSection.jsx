import React from "react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import StarIcon from "../assets/icons/star.svg";
import bookImage from "../assets/images/book-cover.png";
import JavaScript from "../assets/icons/square-js.svg";
import HTMLIcon from "../assets/icons/html5.svg";
import CSSIcon from "../assets/icons/css3.svg";
import ReactIcon from "../assets/icons/react.svg";
import ChromeIcon from "../assets/icons/chrome.svg";
import GithubIcon from "../assets/icons/github.svg";
import MapImg from "../assets/images/MapImage.jpg";
import Smileemoji from "../assets/images/Snapoji.png";
import CardHeader from "../components/CardHeader";
import ToolboxItems from "../components/ToolboxItems";
import CheckIcon from "../assets/icons/check-circle.svg";

const toolboxItem = [
  {
    title: "JavaScript",
    Icon: JavaScript,
  },
  {
    title: "HTML5",
    Icon: HTMLIcon,
  },
  {
    title: "CSS",
    Icon: CSSIcon,
  },
  {
    title: "React",
    Icon: ReactIcon,
  },
  {
    title: "Chrmoe",
    Icon: ChromeIcon,
  },
  {
    title: "Github",
    Icon: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🖌️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Digital Painting",
    emoji: "🧑‍🎨",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "5%",
    top: "65%",
  },
];

const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimps into my World"
          description="Learn more about who I am, What I do, and What inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title={"Certificates"}
                description={"Explore the books shaping my perspective."}
              />
              <div className="w-[75%] mx-auto mt-2 md:mt-0">
                {/* <img src={bookImage} alt="bookCover" className=""/> */}
                <ul>
                  <li className="flex gap-3">
                    <img
                      src={CheckIcon}
                      alt="Check"
                      className="mt-0.5 size-5 md:size-6"
                    />
                    <span className="text-sm">Oracle Cloud Infrastructure 2025 – Certified AI Foundations Associate</span>
                  </li>
                  <li className="flex gap-3">
                    <img
                      src={CheckIcon}
                      alt="Check"
                      className="mt-0.5 size-5 md:size-6"
                    />
                    <span className="text-sm">Google UX Design Foundation – 2023</span>
                  </li>
                  <li className="flex gap-3">
                    <img
                      src={CheckIcon}
                      alt="Check"
                      className="mt-0.5 size-5 md:size-6"
                    />
                    <span className="text-sm">Cloud Computing & DevOps (ExcelR) - Dec 2023</span>
                  </li>
                </ul>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title={"My Toolbox"}
                description={
                  "Explore the technologies and tools I use to craft exceptional digital experience."
                }
                className=""
              />
              <ToolboxItems toolboxItem={toolboxItem} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
              <ToolboxItems
                toolboxItem={toolboxItem}
                className="mt-6 "
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title={"Beyond the Code"}
                description={
                  "Explore my interest and hobbies beyond the digital realm"
                }
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-br from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <img
                src={MapImg}
                alt="place"
                className="h-full w-full object-cover object-top-left"
              />
              <div className="absolute top-30 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <img
                  src={Smileemoji}
                  alt="smilingEmoji"
                  className="size-40 object-fit"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
