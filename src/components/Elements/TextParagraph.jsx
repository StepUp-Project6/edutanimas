import React from "react";

const TextParagraph = ({ content, customClassname }) => {
  return <div className={`${customClassname} text-[#525252] text-[12px] font-medium`}>{content}</div>;
};

export default TextParagraph;
