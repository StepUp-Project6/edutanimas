import React, { useState } from "react";

const Pagination = ({ data, CardComponent }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFading, setIsFading] = useState(false);

  // Menentukan jumlah item per halaman berdasarkan ukuran layar
  const itemsPerPage = window.innerWidth < 768 ? 6 : 8;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Fungsi untuk mengubah halaman dengan fade effect
  const handleClick = (pageNumber) => {
    if (pageNumber !== currentPage) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentPage(pageNumber);
        setIsFading(false);
      }, 300); // Durasi animasi fade sama dengan durasi transisi CSS
    }
  };

  // Menentukan item yang akan ditampilkan pada halaman saat ini
  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col items-center">
      {/* Render komponen kartu yang dinamis berdasarkan data */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 mb-6 transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {currentItems.map((item) => (
          <CardComponent key={item.id} data={item} />
        ))}
      </div>

      {/* Pagination */}
      {data.length > 4 && (
        <div className="flex rounded-md shadow-customShadow border border-gray-100 lg:mt-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber, index) => (
              <button
                key={pageNumber}
                onClick={() => handleClick(pageNumber)}
                className={`px-3 py-1 ${
                  currentPage === pageNumber
                    ? "bg-green-500 text-white"
                    : "bg-white text-green-500"
                } transition duration-500 ease-in-out text-xs 
                  ${
                    index === 0 ? "rounded-l-md p-[14px]" : ""
                  }  // Border-radius untuk tombol pertama
                  ${
                    index === totalPages - 1 ? "rounded-r-md" : ""
                  }  // Border-radius untuk tombol terakhir
                `}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Pagination;
