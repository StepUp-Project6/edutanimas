import React from "react";

const CardVideo = ({ data }) => {
  return (
    <a href={data.link} target="_blank" rel="noopener noreferrer">
      <div className="w-full">
        <img
          src={data.image}
          alt={data.title}
          className="md:w-[200px] lg:w-[288px]"
        />
        <div className="mt-1 md:w-[200px] lg:w-[288px]">
          <p className="text-xs text-[#525252] line-clamp-2 overflow-hidden text-ellipsis lg:text-lg">
            {data.title}
          </p>
        </div>
      </div>
    </a>
  );
};

export default CardVideo;
