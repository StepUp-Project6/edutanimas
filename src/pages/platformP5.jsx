import React from "react";
import Navbar from "../components/Fragments/Navbar";
import HeadSection from "../components/Elements/HeadSection";
import TextParagraph from "../components/Elements/TextParagraph";
import CustomButton from "../components/Elements/CustomButton";

const PlatformP5 = () => {
  return (
    <div className="font-mulish min-h-screen flex flex-col">
      <Navbar />
      <main className="relative w-full h-screen pt-[150px] lg:pt-[130px] xl:pt-[170px]">
        <div className="px-10 md:px-20 xl:px-[400px]">
          <h1 className="md:leading-[40px] lg:leading-[80px] xl:leading-[72px]">
            <HeadSection
              content={[
                {
                  title: "",
                  className: "font-semibold text-[14px]",
                },
                {
                  title: "Platform P5 Gaya Hidup Berkelanjutan ",
                  classname:
                    "font-semibold text-[14px] text-black md:text-[36px] lg:text-[64px]",
                },
                {
                  title: "SMANSABRI",
                  classname:
                    "text-primary font-semibold text-[14px] -top-3 md:text-[36px] md:top-0 lg:text-[64px]",
                },
              ]}
            />
          </h1>
          <TextParagraph
            customClassname={"text-center -mt-2 md:mt-4 xl:px-20"}
            content="P5 Gaya Hidup Berkelanjutan adalah fitur untuk mendokumentasikan kegiatan pertanian berkelanjutan siswa. Melalui fitur ini, siswa dapat melaporkan progres mereka, sementara guru dapat memantau perkembangan secara langsung"
          />
          <a
            href="#"
            target="_blank"
            className="md:w-full md:flex md:justify-center"
          >
            <CustomButton
              content="Isi Form"
              customClassname={
                "text-center bg-[#2FB95D] mt-5 md:w-[200px] md:mt-8 lg:w-[245px] lg:mt-10"
              }
            />
          </a>
        </div>
        <img
          src="images/element-bg-1.png"
          alt="element 1"
          className="absolute -z-20 bottom-0 w-full lg:hidden"
        />
        <img
          src="images/element-bg-2.png"
          alt="element 1"
          className="hidden -z-20 absolute bottom-0 w-full lg:block"
        />
      </main>
    </div>
  );
};

export default PlatformP5;
