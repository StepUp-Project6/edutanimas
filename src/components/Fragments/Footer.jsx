import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white font-mulish flex flex-col justify-center items-center pt-6">
      <div className="flex flex-row gap-1 items-end">
        <img
          src="images/logo-sma.png"
          alt=""
          className="h-[23px] w-[23px] lg:h-[35px] lg:w-[35px]"
        />
        <h2 className="text-sm lg:text-xl text-white font-semibold border-b-[1px] border-white">
          EduTaniMas
        </h2>
      </div>
      {/* <div className="flex flex-row items-baseline w-[276px] text-[10px] text-center"> */}
      <div className="relative flex justify-center gap-1 items-baseline md:items-center text-[10px] text-center px-10 pt-2">
        <div className="absolute top-[11px] left-[30px] hp375:left-[35px] hp375:top-[9px] hp425:top-[11px] md:static">
          <img src="svg/location.svg" alt="" className="w-2" />
        </div>
        <p className="">
          Jalan Wibisono, Gang II/No 3, Bringin, Semarang, Kabupaten Semarang,
          Jawa Tengah (50772)
        </p>
      </div>
      {/* </div> */}
      <p className="text-[10px] text-center px-4 py-2">
        Email : wahyufauziyah2000@gmail.com | Whatsapp : 085876574032
      </p>
      <div className="w-full h-9 bg-[#043A3A]/30 rounded-t-lg"></div>
    </footer>
  );
};

export default Footer;
