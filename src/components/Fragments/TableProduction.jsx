import React from "react";
import PropTypes from "prop-types";

const TableProduction = ({ data }) => {
  const calculateTotal = () => {
    return data.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="rounded border border-[#25bb57]">
      <table className="w-full border-collapse border overflow-hidden rounded">
        <thead className="bg-[#2FB95D] text-white text-xs lg:text-sm">
          <tr className="w-full">
            <th className="w-[12%] px-2 py-1 lg:py-2 lg:font-semibold">No</th>
            <th className="w-[43%] px-2 py-1 lg:py-2 lg:font-semibold text-left">
              Jenis Tanaman
            </th>
            <th className="w-[37%] px-2 py-1 lg:py-2 lg:font-semibold text-left">
              Produksi Tanaman
            </th>
          </tr>
          <tr className="hidden md:block h-1 bg-[#EAFFF1]">
            <td colSpan="3" className="p-0"></td>
          </tr>
        </thead>
        <tbody className="bg-[#EAFFF1] text-xs lg:text-sm">
          {data.map((item, index) => (
            <React.Fragment key={item.id}>
              {/* Elemen <tr> kosong untuk jarak antar baris */}
              <tr className="h-1 lg:h-2">
                <td colSpan="3" className="p-0"></td>
              </tr>
              <tr className={`${item.bgGreen ? "bg-[#67e691]" : ""}`}>
                <td className="px-2 py-1 lg:py-2 text-center">{index + 1}</td>
                <td className="px-2 py-1 lg:py-2 flex items-center space-x-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-7 h-7 bg-white p-1 rounded-[3px]"
                  />
                  <span>{item.title}</span>
                </td>
                <td className="px-2 py-1 lg:py-2 text-left">{item.quantity}</td>
              </tr>
            </React.Fragment>
          ))}
          <tr className="font-bold rounded-lg border-[#015c1f]">
            <td colSpan={2} className="px-2 py-3 text-center ps-8">
              Jumlah
            </td>
            <td className="px-2 py-1 lg:py-2 text-left">{calculateTotal()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

TableProduction.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableProduction;
