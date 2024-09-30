import PropTypes from "prop-types";

const Paragraph = ({ text, highlight, classname, kutipan }) => {
  // Memisahkan teks menjadi array kata-kata
  const words = text.split(' ');

  // Membagi teks menjadi dua bagian: kata yang di-highlight dan sisa teks
  const highlightedWords = words.slice(0, highlight).join(' ');
  const remainingWords = words.slice(highlight).join(' ');

  return (
    <p
      className={`text-xs lg:text-lg font-mulish leading-normal text-[#525252] text-justify ${classname}`}
    >
      <span className="font-bold">{highlightedWords}</span>{" "}
      <span>{remainingWords}</span>
      <span className="font-semibold">{kutipan}</span>
    </p>
  );
}

Paragraph.propTypes = {
    text : PropTypes.string,
    highlight: PropTypes.number,
    classname: PropTypes.string,
}

export default Paragraph;
