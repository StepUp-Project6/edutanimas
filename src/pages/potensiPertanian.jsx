import React from "react";
import Navbar from "../components/Fragments/Navbar";
import HeadSection from "../components/Elements/HeadSection";
import TextParagraph from "../components/Elements/TextParagraph";
import { DataHoltikultura } from "../utils/DataHoltikultura";
import TableProduction from "../components/Fragments/TableProduction";
import SectionImage from "../components/Layouts/SectionImage";
import CardVideo from "../components/Fragments/CardVideo";
import Pagination from "../components/Fragments/Pagination";
import { DataVideoPertanianCabai } from "../utils/DataVideoPertanianCabai";
import { DataVideoPertanianPadi } from "../utils/DataVideoPertanianPadi";
import { DataVideoPertanianPisang } from "../utils/DataVideoPertanianPisang";
import { DataVideoEkonomiHasilPertanian } from "../utils/DataVideoEkonomiHasilPertanian";
import { DataPangan } from "../utils/DataPangan";
import { DataBuah } from "../utils/DataBuah";
import Footer from "../components/Fragments/Footer";
import { Helmet } from "react-helmet";

const PotensiPertanian = () => {
  return (
    <div className="font-mulish min-h-screen flex flex-col scrollbar-thin-4px scrollbar-thumb-gray-400">
      <Helmet>
        <title>Potensi Pertanian - EduTaniMas</title>
        <meta
          name="description"
          content="Potensi Hasil Pertanian di Kecamatan Bringin disajikan dalam tabel di bawah ini."
        />
        <meta
          name="keywords"
          content="edutanimas, pertanian, pertanian berkelanjutan, edukasi pertanian, pembangunan pertanian, smansabri, sekolah, platform p5"
        />
        <link
          rel="canonical"
          href="https://edutanimas.vercel.app/potensi-pertanian"
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
      <main className="w-full mt-[70px] mb-5 md:relative lg:mt-[60px] overflow-hidden">
        <img
          src="images/element-bg-5.png"
          alt="bg"
          className="hidden absolute md:top-[500px] lg:top-[610px] xl:top-[625px] w-full -z-50 md:block"
        />
        <img
          src="images/element-bg-6.png"
          alt="bg"
          className="hidden absolute md:top-[780px] lg:top-[800px] xl:top-[800px] w-full -z-50 md:block"
        />
        <img
          src="images/element-bg-6.png"
          alt="bg"
          className="hidden absolute md:top-[880px] lg:top-[1070px] xl:top-[950px] w-full -z-50 md:block"
        />
        <h1 className="text-center">
          <HeadSection
            width="font-bold"
            content={[
              { title: "Hasil " },
              { title: "Pertanian", classname: "text-primary" },
            ]}
          />
        </h1>
        <TextParagraph
          customClassname="text-center mt-3 px-14"
          content="Potensi Hasil Pertanian di Kecamatan Bringin disajikan dalam tabel di bawah ini."
        />
        {/* SECTION PRODUKSI HOLTIKULTURA*/}
        <section
          className="relative w-full pt-[350px] mt-14 h-[830px] md:pt-0 md:mt-6 
        md:h-[500px] md:mb-4 lg:h-[600px]"
        >
          <img
            src="images/element-bg-3.png"
            alt="bg"
            className="absolute bottom-0 w-full -z-50 md:hidden"
          />
          {/* IMAGE ABSOLUTE 1 : PRODUKSI HOLTIKULTURA */}
          <SectionImage
            images={[
              {
                src: "images/floated/potensi-image-1.png",
                position:
                  "top-0 left-1 -z-10 md:-left-6 md:top-[120px] lg:-left-4 lg:top-[150px] xl:-left-8 xl:top-[140px]",
                size: "w-[123px] lg:w-[130px] xl:w-[190px]",
              },
              {
                src: "images/floated/potensi-image-2.png",
                position:
                  "top-9 right-[135px] -z-20 md:right-[100px] md:top-[100px] lg:top-[120px] xl:right-[160px] xl:top-[110px]",
                size: "w-[65px] md:w-[90px] lg:w-[110px] xl:w-[152px]",
              },
              {
                src: "images/floated/potensi-image-3.png",
                position:
                  "top-16 right-[68px] -z-10 md:right-[40px] md:top-[150px] lg:top-[200px] xl:top-[210px] xl:right-[60px]",
                size: "w-[128px] xl:w-[192px]",
              },
              {
                src: "images/floated/potensi-image-4.png",
                position:
                  "top-[180px] left-[36px] -z-10 md:left-[50px] md:top-[260px] lg:left-[75px] lg:top-[300px] xl:top-[370px] xl:left-[100px]",
                size: "w-[98px] md:w-[86px] xl:w-[106px]",
              },
              {
                src: "images/floated/potensi-image-5.png",
                position:
                  "top-[230px] right-[112px] -z-10 md:right-[148px] md:top-[230px] lg:top-[290px] xl:top-[350px] xl:right-[240px]",
                size: "w-[80px] md:w-[66px] xl:w-[81px]",
              },
            ]}
          />

          {/* TABEL PRODUKSI KOLTIKULTURA*/}
          <div className="px-6">
            <h2 className="px-10 text-center leading-[16px] mb-5">
              <HeadSection
                content={[
                  {
                    title: "",
                    className: "font-semibold text-[14px]",
                  },
                  {
                    title: "Tabel Produksi Holtikultura di ",
                    classname:
                      "font-semibold text-[14px] text-black md:text-[14px] lg:text-[20px]",
                  },
                  {
                    title: "Kecamatan Bringin ",
                    classname:
                      "text-primary font-semibold text-[14px] md:text-[14px] md:top-0 lg:text-[20px]",
                  },
                  {
                    title: "(Kuintal)",
                    classname:
                      "font-semibold text-[14px] text-black md:text-[14px] lg:text-[20px]",
                  },
                ]}
              />
            </h2>
            <div className="md:w-full md:px-48 lg:px-52 xl:px-96">
              <TableProduction data={DataHoltikultura} />
              <p className="text-xs lg:text-base">
                Sumber: Kecamatan Bringin dalam Angka 2021
              </p>
            </div>
          </div>
        </section>

        {/* SECTION VIDEO BERKELANJUTAN PERTANIAN CABAI */}
        <section className="relative w-full pt-0 mt-14 md:mt-0 lg:mt-14">
          <img
            src="images/element-bg-4.png"
            alt="bg"
            className="absolute top-0 w-full -z-50 md:hidden"
          />
          <h2 className="px-24 text-center leading-[16px] mb-5 md:mb-10 lg:mb-14">
            <HeadSection
              content={[
                {
                  title: "",
                  className: "font-semibold text-[14px] ",
                },
                {
                  title: "Video Berkelanjutan ",
                  classname:
                    "font-semibold text-[14px] text-black md:text-[20px] lg:text-[32px]",
                },
                {
                  title: "Pertanian Cabai ",
                  classname:
                    "text-primary font-semibold text-[14px] md:text-[20px] lg:text-[32px] md:top-0",
                },
              ]}
            />
          </h2>
          <div className="w-full mt-8 px-5 md:w-[710px] md:ps-8 md:mx-auto md:overflow-auto lg:w-[970px] xl:w-full xl:ps-5 xl:flex xl:justify-center">
            <Pagination
              data={DataVideoPertanianCabai}
              CardComponent={CardVideo}
            />
          </div>
        </section>

        {/* SECTION PRODUKSI TANAMAN PANGAN*/}
        <section className="relative w-full pt-[350px] mt-5 md:pt-4">
          {/* IMAGE ABSOLUTE 2 : PRODUKSI TANAMAN PANGAN */}
          <SectionImage
            images={[
              {
                src: "images/floated/potensi-image-6.png",
                position:
                  "top-0 left-1 -z-10 md:-left-6 md:top-[140px] lg:-left-4 lg:top-[150px] xl:-left-8 xl:top-[175px]",
                size: "w-[123px] lg:w-[130px] xl:w-[178px]",
              },
              {
                src: "images/floated/potensi-image-7.png",
                position:
                  "top-9 right-[135px] -z-20  md:left-[100px] md:top-[260px] lg:left-[95px] lg:top-[300px] xl:left-[175px] xl:top-[300px]",
                size: "w-[65px] md:w-[68px] lg:w-[80px] xl:w-[102px]",
              },
              {
                src: "images/floated/potensi-image-8.png",
                position:
                  "top-16 right-[68px] -z-10 md:right-[30px] md:top-[120px] lg:top-[150px] xl:top-[145px] xl:right-[60px]",
                size: "w-[128px] md:w-[110px] xl:w-[146px]",
              },
              {
                src: "images/floated/potensi-image-9.png",
                position:
                  "top-[180px] left-[36px] -z-10 md:left-[50px] md:top-[100px] md:-z-20 lg:top-[110px] lg:left-[60px]  xl:top-[130px] xl:left-[95px]",
                size: "w-[98px] md:w-[86px] xl:w-[106px]",
              },
              {
                src: "images/floated/potensi-image-10.png",
                position:
                  "top-[230px] right-[112px] -z-10 md:right-[128px] md:top-[240px] lg:top-[290px] xl:top-[320px] xl:right-[190px]",
                size: "w-[80px] md:w-[90px] xl:w-[119px]",
              },
            ]}
          />

          {/* TABEL PRODUKSI PANGAN*/}
          <div className="px-6">
            <h2 className="px-8 text-center leading-[16px] mb-5">
              <HeadSection
                content={[
                  {
                    title: "",
                    className: "font-semibold text-[14px]",
                  },
                  {
                    title: "Tabel Produksi Tanaman Pangan di ",
                    classname:
                      "font-semibold text-[14px] text-black md:text-[14px] lg:text-[20px]",
                  },
                  {
                    title: "Kecamatan Bringin ",
                    classname:
                      "text-primary font-semibold text-[14px] md:top-0 md:text-[14px] lg:text-[20px]",
                  },
                  {
                    title: "(Kuintal)",
                    classname:
                      "font-semibold text-[14px] text-black md:text-[14px] lg:text-[20px]",
                  },
                ]}
              />
            </h2>
            <div className="md:w-full md:px-48 lg:px-52 xl:px-96">
              <TableProduction data={DataPangan} />
              <p className="text-xs lg:text-base">
                Sumber: Kecamatan Bringin dalam Angka 2021
              </p>
            </div>
          </div>
        </section>

        {/* SECTION VIDEO BERKELANJUTAN PERTANIAN PADI */}
        <section className="relative w-full pt-0 mt-7">
          <img
            src="images/element-bg-4.png"
            alt="bg"
            className="absolute top-0 w-full -z-50 md:hidden"
          />
          <h2 className="px-24 text-center leading-[16px] mb-5">
            <HeadSection
              content={[
                {
                  title: "",
                  className: "font-semibold text-[14px]",
                },
                {
                  title: "Video Berkelanjutan ",
                  classname:
                    "font-semibold text-[14px] text-black md:text-[20px] lg:text-[32px]",
                },
                {
                  title: "Pertanian Padi ",
                  classname:
                    "text-primary font-semibold text-[14px] md:top-0 md:text-[20px] lg:text-[32px]",
                },
              ]}
            />
          </h2>
          <div className="w-full px-5 mt-7 md:w-[710px] md:ps-8 md:mx-auto md:overflow-auto lg:w-[970px] xl:w-[1300px] scrollbar-thin-4px scrollbar-thumb-gray-400">
            <Pagination
              data={DataVideoPertanianPadi}
              CardComponent={CardVideo}
            />
          </div>
        </section>

        {/* SECTION PRODUKSI TANAMAN BUAH*/}
        <section className="relative w-full pt-[350px] mt-5 md:pt-5">
          {/* IMAGE ABSOLUTE 2 : PRODUKSI TANAMAN PANGAN */}
          <SectionImage
            images={[
              {
                src: "images/floated/potensi-image-11.png",
                position:
                  "top-0 left-1 -z-10 md:-left-6 md:top-[190px] lg:-left-6 lg:top-[230px] xl:-left-10 xl:top-[240px]",
                size: "w-[123px] lg:w-[130px] xl:w-[228px]",
              },
              {
                src: "images/floated/potensi-image-12.png",
                position:
                  "top-9 right-[135px] -z-20 md:right-[100px] md:top-[460px] lg:top-[560px] xl:top-[570px] xl:right-[250px]",
                size: "w-[65px] md:w-[100px] lg:w-[117px]",
              },
              {
                src: "images/floated/potensi-image-13.png",
                position:
                  "top-16 right-[68px] -z-10 md:right-[40px] md:top-[280px] lg:top-[340px] xl:right-[80px] xl:top-[330px]",
                size: "w-[128px] xl:w-[206px]",
              },
              {
                src: "images/floated/potensi-image-14.png",
                position:
                  "top-[180px] left-[36px] -z-10 md:left-[30px] md:top-[390px] lg:top-[440px] xl:left-[140px] xl:top-[520px]",
                size: "w-[98px] md:w-[128px] xl:w-[148px]",
              },
              {
                src: "images/floated/potensi-image-15.png",
                position:
                  "top-[230px] right-[112px] -z-10 md:right-[100px] md:top-[200px] md:-z-20 lg:top-[260px] xl:right-[200px] xl:top-[240px]",
                size: "w-[80px] md:w-[128px] xl:w-[151px]",
              },
            ]}
          />

          {/* TABEL PRODUKSI BUAH*/}
          <div className="px-6">
            <h2 className="px-8 text-center leading-[16px] mb-5">
              <HeadSection
                content={[
                  {
                    title: "",
                    className: "font-semibold text-[14px]",
                  },
                  {
                    title: "Tabel Produksi Tanaman Buah di ",
                    classname:
                      "font-semibold text-[14px] text-black md:text-[14px] lg:text-[20px]",
                  },
                  {
                    title: "Kecamatan Bringin ",
                    classname:
                      "text-primary font-semibold text-[14px] md:text-[14px] lg:text-[20px] md:top-0",
                  },
                  {
                    title: "(Kuintal)",
                    classname:
                      "font-semibold text-[14px] text-black md:text-[14px] lg:text-[20px]",
                  },
                ]}
              />
            </h2>
            <div className="md:w-full md:px-48 lg:px-52 xl:px-96">
              <TableProduction data={DataBuah} />
              <p className="text-xs lg:text-base">
                Sumber: Kecamatan Bringin dalam Angka 2021
              </p>
            </div>
          </div>
        </section>

        {/* SECTION VIDEO BERKELANJUTAN PERTANIAN PISANG */}
        <section className="relative w-full pt-0 mt-7">
          <h2 className="px-24 text-center leading-[16px] mb-5">
            <HeadSection
              content={[
                {
                  title: "",
                  className: "font-semibold text-[14px]",
                },
                {
                  title: "Video Berkelanjutan ",
                  classname:
                    "font-semibold text-[14px] text-blackmd:text-[20px] lg:text-[32px]",
                },
                {
                  title: "Pertanian Pisang ",
                  classname:
                    "text-primary font-semibold text-[14px] d:text-[20px] lg:text-[32px] md:top-0",
                },
              ]}
            />
          </h2>
          <div className="w-full px-5 mt-7 md:w-[710px] md:ps-8 md:mx-auto md:overflow-auto lg:w-[970px] xl:w-[1300px]">
            <Pagination
              data={DataVideoPertanianPisang}
              CardComponent={CardVideo}
            />
          </div>
        </section>

        {/* SECTION VIDEO EKONOMI HASIL PERTANIAN */}
        <section className="relative w-full pt-0 mt-7">
          <h2 className="px-24 text-center leading-[16px] mb-5">
            <HeadSection
              content={[
                {
                  title: "",
                  className: "font-semibold text-[14px]",
                },
                {
                  title: "Video Berkelanjutan ",
                  classname:
                    "font-semibold text-[14px] text-blackmd:text-[20px] lg:text-[32px]",
                },
                {
                  title: "Ekonomi Hasil Pertanian ",
                  classname:
                    "text-primary font-semibold text-[14px] d:text-[20px] lg:text-[32px] md:top-0",
                },
              ]}
            />
          </h2>
          <div className="w-full px-5 mt-7 md:w-[710px] md:ps-8 md:mx-auto md:overflow-auto lg:w-[970px] xl:w-[1300px]">
            <Pagination
              data={DataVideoEkonomiHasilPertanian}
              CardComponent={CardVideo}
            />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default PotensiPertanian;
