import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";

const ToolboxItems = ({ toolboxItem, className, itemsWrapperClassName }) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {toolboxItem.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-black/10 rounded-lg"
              >
                <img src={item.Icon} alt="" className="size-10" />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
