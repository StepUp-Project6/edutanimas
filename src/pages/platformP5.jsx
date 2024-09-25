import React from "react";
import Navbar from "../components/Fragments/Navbar";
import HeadSection from "../components/Elements/HeadSection";
import TextParagraph from "../components/Elements/TextParagraph";
import CustomButton from "../components/Elements/CustomButton";
import Footer from "../components/Fragments/Footer";
import { Helmet } from "react-helmet";

const PlatformP5 = () => {
  return (
    <div className="font-mulish min-h-screen flex flex-col">
      <Helmet>
        <title>Platform P5 - EduTaniMas</title>
        <meta
          name="description"
          content="P5 Gaya Hidup Berkelanjutan adalah fitur untuk mendokumentasikan kegiatan pertanian berkelanjutan siswa. Melalui fitur ini, siswa dapat melaporkan progres mereka, sementara guru dapat memantau perkembangan secara langsung"
        />
        <meta
          name="keywords"
          content="edutanimas, pertanian, pertanian berkelanjutan, edukasi pertanian, pembangunan pertanian, smansabri, sekolah, platform p5"
        />
        <link
          rel="canonical"
          href="https://edutanimas.vercel.app/platform-p5"
        />
        <meta
          property="og:title"
          content="EduTaniMas - Edukasi Pertanian Masuk Sekolah"
        />
        <meta
          property="og:description"
          content="Tani Mas merupakan kegiatan budidaya pertanian yang dilaksanakan oleh siswa dan guru di lingkungan sekolah sebagai salah satu program unggulan 100 hari kerja Menteri Pertanian RI. Program Tani Mas meningkatkan pengetahuan siswa terhadap budidaya pertanian dan menumbuhkan semangat siswa menjadi agripreneur serta meningkatkan ketersediaan dan akses pangan"
        />
        <meta property="og:image" content="images/home-page.jpg" />
        <meta property="og:url" content="https://edutanimas.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <main className="relative w-full h-screen pt-[150px] lg:pt-[130px] xl:pt-[90px]">
        <div className="px-10 md:px-20 xl:px-[250px]">
          <h1 className="text-center md:leading-[40px] lg:leading-[80px] xl:leading-[72px]">
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
            customClassname={"text-center -mt-2 md:mt-4 xl:px-8"}
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

      <Footer />
    </div>
  );
};

export default PlatformP5;
