import React from "react";

const CustomButton = ({ content, customClassname }) => {
  return (
    <div
      className={` ${customClassname} rounded-[10px] p-[10px] text-white font-semibold
      lg:text-[21px]`}
    >
      {content}
    </div>
  );
};

export default CustomButton;
