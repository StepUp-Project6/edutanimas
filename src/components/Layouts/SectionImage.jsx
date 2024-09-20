import PropTypes from "prop-types";

const SectionImage = ({ images = [] }) => {
  return (
    <div className="w-full">
      {images.map((item, index) => (
        <div key={index} className={`absolute ${item.position}`}>
          <img src={item.src} alt="" className={`${item.size} object-cover scale-150 origin-top-left`}/>
        </div>
      ))}
    </div>
  );
};

SectionImage.propTypes = {
    images : PropTypes.array,
}

export default SectionImage;
