import PropTypes from "prop-types";
import List from "../Elements/List";
import HeadSection2 from "../Elements/HeadSection2";

const NumberedList2 = ({ content = [], classname, size }) => {
  return (
    <>
      {content.map((item, index) => (
        <div key={index} className={`flex flex-row items-center mb-2.5 ${classname}`}>
          <List number={item.id} classname={`me-2.5 mt-1 ${size}`} />
          <div className="flex gap-1">
            {item.title.map((title, index)=>((
                <HeadSection2
                key={index}
                classname="text-sm lg:text-2xl"
                width=" font-semibold text-start"
                content={[{ title: title.word, classname: title.classname }]}
              />
            )))}
          </div>
        </div>
      ))}
    </>
  );
};

NumberedList2.propTypes = {
  content: PropTypes.array,
  classname: PropTypes.string,
  header: PropTypes.bool,
  size: PropTypes.string
};

export default NumberedList2;
