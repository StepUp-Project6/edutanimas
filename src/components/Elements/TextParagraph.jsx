import React from "react";

const TextParagraph = ({ content, customClassname }) => {
  return <div className={`${customClassname} text-[#525252] text-[12px] font-medium md:text-[16px]
  lg:text-[18px]`}>{content}</div>;
};

export default TextParagraph;
