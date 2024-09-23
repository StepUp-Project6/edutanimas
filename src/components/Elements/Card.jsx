import React from "react";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="flex items-center bg-white rounded-xl shadow-lg p-4 w-[320px] h-[71px] lg:w-[450px] lg:h-[100px] xl:w-[550px] xl:h-[152px]">
      <img
       src={imageSrc}
       alt={title}
       className="w-[44px] h-[44px] rounded-[10px] mr-4 lg:w-[78.69px] lg:h-[80px] xl:w-[78.69px] xl:h-[80px]"
      />
      <div className="flex flex-col font-mulish">
        <h3 className="font-semibold text-[14px] lg:text-[20px] xl:text-[28px]">{title}</h3>
        <p className="text-gray-500 text-[10px] lg:text-[14px]  xl:text-[18px]">{description}</p>
      </div>
    </div>
  );
};

export default Card;
