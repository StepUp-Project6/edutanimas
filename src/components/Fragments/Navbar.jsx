import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import Logo from "../Elements/Logo";

const menu = [
  {
    name: "Edu Tani Mas",
    path: "/",
    active: true,
    icon: "svg/nav-home.svg",
  },
  {
    name: "Pertanian Berkelanjutan",
    path: "/pertanian-berkelanjutan",
    active: false,
    icon: "svg/nav-pb.svg",
  },
  {
    name: "Potensi Pertanian",
    path: "/potensi-pertanian",
    active: false,
    icon: "svg/nav-pp.svg",
  },
  {
    name: "Platform P5",
    path: "/platform-p5",
    active: false,
    icon: "svg/nav-pp5.svg",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="top-0 relative">
        <div className="flex pt-8  justify-between items-center md:ps-[42px] xl:ps-[134px] w-full font-mulish ">
          <div className="flex flex-row items-center">
            <IoMenuOutline
              className="h-8 w-[71px] lg:hidden"
              onClick={toggleMenu}
            />
            <Logo />
          </div>
          <div className="hidden lg:flex ">
            <div className="flex md:mr-10 lg:mr-[80px]">
              {menu.map((item) => (
                <Link
                  to={item.path}
                  key={item.name}
                  className={`text-nowrap md:ml-5 py-4 lg:ml-8 md:px-2 lg:px-0 md:text-center md:text-sm lg:text-base font-medium text-black ${
                    location.pathname === item.path ? "text-primary" : ""
                  } `}
                >
                  {item.name}
                  <span className="flex justify-center">
                    {location.pathname === item.path && (
                      <GoDotFill className="center" />
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 z-40" onClick={toggleMenu}></div>
        )}
        <SideBar isMenuOpen={isMenuOpen} />
      </nav>
    </>
  );
};

const SideBar = ({ isMenuOpen }) => {
  return (
    <div
      className={`w-[292px] font-mulish h-screen fixed top-0 z-50 bg-white border-r-2 transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col pt-5 px-4">
        <Logo />
        <h3 className="text-sm font-bold text-[#8391A1] mb-5 mt-7">
          MENU UTAMA
        </h3>
        <div className="flex flex-col gap-5 ">
          {menu.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className="flex items-center py-3"
            >
              <img src={item.icon} alt="" className="px-5 text-black" />
              <p className="text-base font-semibold">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
