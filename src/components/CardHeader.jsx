import React from "react";
import { twMerge } from "tailwind-merge";
import StarIcon from '../assets/icons/star.svg'

const CardHeader = ({ title, description, className}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <img src={StarIcon} alt="" className="size-9" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs mt-2">{description}</p>
    </div>
  );
};

export default CardHeader;
