import PropTypes from "prop-types";
import List from "../Elements/List";
import HeadSection2 from "../Elements/HeadSection2";
import Paragraph from "./Paragraph";

const NumberedList = ({ content = [], classname, header, size }) => {
  return (
    <>
      {content.map((item, index) => (
        <div key={index} className={`flex flex-row mb-2.5 ${classname}`}>
          <List number={item.id} classname={`me-2.5 mt-1 ${size}`}/>
          {header ? (
            <div className="flex flex-col">
              <HeadSection2
                classname="text-base lg:text-xl"
                width=" font-semibold text-start"
                content={[{ title: item.title, classname: "" }]}
              />
              <Paragraph text={item.value} highlight={0} />
            </div>
          ) : (
            <Paragraph text={item.value} highlight={0} className="" />
          )}
        </div>
      ))}
    </>
  );
};

NumberedList.propTypes = {
  content: PropTypes.array,
  classname: PropTypes.string,
  header: PropTypes.bool,
  size: PropTypes.string,
};

export default NumberedList;
