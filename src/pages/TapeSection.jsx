import React, { Fragment } from "react";
import StarIcon from "../assets/icons/star.svg";

const WORDS = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User-Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

const TapeSection = () => {
  return (
    <div className="py-16 overflow-x-clip">
      <div className="bg-black  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]"
          style={{
            transform: 'translateX(-750px)',
          }}
          >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {WORDS.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-white uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <img src={StarIcon} alt="" className="size-6" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TapeSection;
