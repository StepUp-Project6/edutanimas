import React from "react";
import Navbar from "../components/Fragments/Navbar";
import HeadSection from "../components/Elements/HeadSection";
import TextParagraph from "../components/Elements/TextParagraph";
import CustomButton from "../components/Elements/CustomButton";

const PlatformP5 = () => {
  return (
    <div className="font-mulish min-h-screen flex flex-col">
      <Navbar />
      <main className="relative w-full h-screen pt-[150px]">
        <div className="px-10">
          <HeadSection
            content={[
              {
                title: "",
                className: "font-semibold text-[14px]",
              },
              {
                title: "Platform P5 Gaya Hidup Berkelanjutan ",
                classname: "font-semibold text-[14px] text-black",
              },
              {
                title: "SMANSABRI",
                classname: "text-primary font-semibold text-[14px] -top-3",
              },
            ]}
          />
          <TextParagraph
            customClassname={"text-center -mt-2"}
            content="P5 Gaya Hidup Berkelanjutan adalah fitur untuk mendokumentasikan kegiatan pertanian berkelanjutan siswa. Melalui fitur ini, siswa dapat melaporkan progres mereka, sementara guru dapat memantau perkembangan secara langsung"
          />
          <a href="#" target="_blank">
            <CustomButton
              content="Isi Form"
              customClassname={"text-center bg-[#2FB95D] mt-5"}
            />
          </a>
        </div>
        <img
          src="images/element-bg-1.png"
          alt="element 1"
          className="absolute bottom-0 w-full"
        />
      </main>
    </div>
  );
};

export default PlatformP5;
