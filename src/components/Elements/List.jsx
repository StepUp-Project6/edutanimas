import PropTypes from "prop-types";

const List = ({ number, classname }) => {
  return (
    <div
      className={`flex justify-center items-center min-w-6 min-h-6 max-w-6 max-h-6 bg-primary text-white rounded-md ${classname}`}
    >
      <p className="font-mulish">{number}</p>
    </div>
  );
};
List.propTypes = {
  number: PropTypes.number,
};
export default List;
