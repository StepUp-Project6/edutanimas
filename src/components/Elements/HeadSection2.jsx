import PropTypes from "prop-types";

const HeadSection2 = ({ content = [], classname = "", width = "" }) => {
  return (
    <h1
      className={`text-black text-center font-bricolage ${width} ${
        classname ? classname : "text-[24px] lg:text-[64px]"
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
            <span className="absolute inset-0 z-0">
              {item.highlight ? (
                <img
                  src="svg/header-splash.svg"
                  alt=""
                  className="w-full h-auto scale-125 lg:scale-x-150"
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

HeadSection2.propTypes = {
  content: PropTypes.array,
  classname: PropTypes.string,
  width: PropTypes.string,
};

export default HeadSection2;
