import React from "react";

const SectionHeader = ({title, eyebrow, description}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest text-center text-black">
         {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-black">
        {title}
      </h2>
      <p className="text-center text-black/90 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
