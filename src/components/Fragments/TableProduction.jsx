import React from "react";
import PropTypes from "prop-types";

const TableProduction = ({ data }) => {
  const calculateTotal = () => {
    return data.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <table className="w-full border-collapse border border-primary">
      <thead className="bg-[#2FB95D] text-white text-xs">
        <tr className="w-full">
          <th className="w-[12%] px-2 py-1">No</th>
          <th className="w-[42%] px-2 py-1 text-left">Jenis Tanaman</th>
          <th className="w-[36%] px-2 py-1 text-left">
            Produksi Tanaman (Kwintal)
          </th>
        </tr>
      </thead>
      <tbody className="bg-[#EAFFF1] text-xs">
        {data.map((item, index) => (
          <tr key={item.id} className="hover:bg-[#2FB95D]">
            <td className=" px-2 py-1 text-center">{index + 1}</td>
            <td className=" px-2 py-1 flex items-center space-x-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-7 h-7 bg-white p-1 rounded-[3px]"
              />
              <span>{item.title}</span>
            </td>
            <td className=" px-2 py-1 text-left">{item.quantity}</td>
          </tr>
        ))}
        <tr className="font-bold">
          <td colSpan={2} className="px-2 py-3 text-center ps-8">
            Jumlah
          </td>
          <td className=" px-2 py-1 text-left">{calculateTotal()}</td>
        </tr>
      </tbody>
    </table>
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