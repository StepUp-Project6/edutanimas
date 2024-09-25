import PropTypes from "prop-types";

const HeadSection = ({ content = [], classname = "", width = "" }) => {
  return (
    <h1
      className={`text-black font-bricolage ${width} ${
        classname ? classname : "text-[24px] md:text-[36px] lg:text-[42px] xl:text-[64px]"
      }`}
    >
      <span>
        {content.map((item, index) => (
          <span
            key={index}
            className={`relative ${item.classname} ${
              item.highlight ? "lg:ml-8" : ""
            }`}
          >
            <span className="relative z-10">{item.title}</span>
            <span className="absolute inset-0 -top-2 lg:-top-4 z-0">
              {item.highlight ? (
                <img
                  src="svg/header-splash.svg"
                  alt=""
                  className="w-full h-auto scale-x-125 lg:scale-x-150"
                />
              ) : (
                ""
              )}
            </span>
          </span>
        ))}
      </span>
    </h1>
  );
};

HeadSection.propTypes = {
  content: PropTypes.array,
  classname: PropTypes.string,
  width: PropTypes.string,
};

export default HeadSection;
