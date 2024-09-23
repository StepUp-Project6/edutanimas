import React, { useState, useEffect } from "react";

const Pagination = ({ data, CardComponent }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Mengatur isMobile saat window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Menentukan jumlah item per halaman (2 baris x 2 kolom = 4 item)
  const itemsPerPage = 4;

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
  const currentItems = isMobile
    ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : data; // Menampilkan semua data jika di desktop

  // Menentukan jumlah total halaman jika di mobile view
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="flex flex-col items-center md:items-start ">
      {/* Render komponen kartu yang dinamis berdasarkan data */}
      <div
        className={`${
          isMobile
            ? "grid grid-cols-2 gap-x-4 gap-y-4"
            : "flex gap-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400"
        } mb-6 transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {currentItems.map((item) => (
          <CardComponent key={item.id} data={item} />
        ))}
      </div>

      {/* Pagination - hanya tampil di mobile */}
      {isMobile && data.length > itemsPerPage && (
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
