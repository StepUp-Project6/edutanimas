import React from 'react';

const InfoCard = ({ title, description }) => {
  return (
    <div className="flex items-start space-x-2 mb-6">
      {/* Kotak centang hijau */}
      <div className="flex-shrink-0">
        <div className="w-6 h-6 flex items-center justify-center bg-green-500 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      {/* Teks di sebelah kanan */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 md:text-[20px]">
          {title}
        </h3>
        <p className="text-gray-600 leading-5 md:leading-7 text-justify text-xs font-mulish md:text-[14px] lg:text-[16px] xl:text-[18px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
