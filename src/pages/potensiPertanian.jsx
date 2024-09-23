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
import { DataPangan } from "../utils/DataPangan";
import { DataBuah } from "../utils/DataBuah";

const PotensiPertanian = () => {
  return (
    <div className="font-mulish min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full mt-[70px] mb-5">
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
        <section className="relative w-full pt-[350px] mt-14 h-[830px]">
          <img
            src="images/element-bg-3.png"
            alt="bg"
            className="absolute bottom-0 w-full -z-50 "
          />
          {/* IMAGE ABSOLUTE 1 : PRODUKSI HOLTIKULTURA */}
          <SectionImage
            images={[
              {
                src: "images/floated/potensi-image-1.png",
                position: "top-0 left-1 -z-10",
                size: "w-[123px]",
              },
              {
                src: "images/floated/potensi-image-2.png",
                position: "top-9 right-[135px] -z-20",
                size: "w-[65px]",
              },
              {
                src: "images/floated/potensi-image-3.png",
                position: "top-16 right-[68px] -z-10",
                size: "w-[128px] ",
              },
              {
                src: "images/floated/potensi-image-4.png",
                position: "top-[180px] left-[36px] -z-10",
                size: "w-[98px] ",
              },
              {
                src: "images/floated/potensi-image-5.png",
                position: "top-[230px] right-[112px] -z-10",
                size: "w-[80px] ",
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
                      "font-semibold text-[14px] text-black md:text-[36px] lg:text-[64px]",
                  },
                  {
                    title: "Kecamatan Bringin ",
                    classname:
                      "text-primary font-semibold text-[14px] md:text-[36px] md:top-0 lg:text-[64px]",
                  },
                ]}
              />
            </h2>
            <TableProduction data={DataHoltikultura} />
          </div>
        </section>

        {/* SECTION VIDEO BERKELANJUTAN PERTANIAN CABAI */}
        <section className="relative w-full pt-0 mt-14">
          <img
            src="images/element-bg-4.png"
            alt="bg"
            className="absolute top-0 w-full -z-50"
          />
          <h2 className="px-20 text-center leading-[16px] mb-5">
            <HeadSection
              content={[
                {
                  title: "",
                  className: "font-semibold text-[14px]",
                },
                {
                  title: "Video Berkelanjutan ",
                  classname:
                    "font-semibold text-[14px] text-black md:text-[36px] lg:text-[64px]",
                },
                {
                  title: "Pertanian Cabai ",
                  classname:
                    "text-primary font-semibold text-[14px] md:text-[36px] md:top-0 lg:text-[64px]",
                },
              ]}
            />
          </h2>
          <div className="w-full mt-8 px-5">
            <Pagination
              data={DataVideoPertanianCabai}
              CardComponent={CardVideo}
            />
          </div>
        </section>

        {/* SECTION PRODUKSI TANAMAN PANGAN*/}
        <section className="relative w-full pt-[350px] mt-5">
          {/* IMAGE ABSOLUTE 2 : PRODUKSI TANAMAN PANGAN */}
          <SectionImage
            images={[
              {
                src: "images/floated/potensi-image-6.png",
                position: "top-0 left-1 -z-10",
                size: "w-[123px]",
              },
              {
                src: "images/floated/potensi-image-7.png",
                position: "top-9 right-[135px] -z-20",
                size: "w-[65px]",
              },
              {
                src: "images/floated/potensi-image-8.png",
                position: "top-16 right-[68px] -z-10",
                size: "w-[128px] ",
              },
              {
                src: "images/floated/potensi-image-9.png",
                position: "top-[180px] left-[36px] -z-10",
                size: "w-[98px] ",
              },
              {
                src: "images/floated/potensi-image-10.png",
                position: "top-[230px] right-[112px] -z-10",
                size: "w-[80px] ",
              },
            ]}
          />

          {/* TABEL PRODUKSI KOLTIKULTURA*/}
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
                      "font-semibold text-[14px] text-black md:text-[36px] lg:text-[64px]",
                  },
                  {
                    title: "Kecamatan Bringin ",
                    classname:
                      "text-primary font-semibold text-[14px] md:text-[36px] md:top-0 lg:text-[64px]",
                  },
                ]}
              />
            </h2>
            <TableProduction data={DataPangan} />
          </div>
        </section>

        {/* SECTION VIDEO BERKELANJUTAN PERTANIAN PADI */}
        <section className="relative w-full pt-0 mt-7">
          <img
            src="images/element-bg-4.png"
            alt="bg"
            className="absolute top-0 w-full -z-50"
          />
          <h2 className="px-20 text-center leading-[16px] mb-5">
            <HeadSection
              content={[
                {
                  title: "",
                  className: "font-semibold text-[14px]",
                },
                {
                  title: "Video Berkelanjutan ",
                  classname:
                    "font-semibold text-[14px] text-black md:text-[36px] lg:text-[64px]",
                },
                {
                  title: "Pertanian Padi ",
                  classname:
                    "text-primary font-semibold text-[14px] md:text-[36px] md:top-0 lg:text-[64px]",
                },
              ]}
            />
          </h2>
          <div className="w-full px-5 mt-7">
            <Pagination
              data={DataVideoPertanianPadi}
              CardComponent={CardVideo}
            />
          </div>
        </section>

        {/* SECTION PRODUKSI TANAMAN BUAH*/}
        <section className="relative w-full pt-[350px] mt-5">
          {/* IMAGE ABSOLUTE 2 : PRODUKSI TANAMAN PANGAN */}
          <SectionImage
            images={[
              {
                src: "images/floated/potensi-image-11.png",
                position: "top-0 left-1 -z-10",
                size: "w-[123px]",
              },
              {
                src: "images/floated/potensi-image-12.png",
                position: "top-9 right-[135px] -z-20",
                size: "w-[65px]",
              },
              {
                src: "images/floated/potensi-image-13.png",
                position: "top-16 right-[68px] -z-10",
                size: "w-[128px] ",
              },
              {
                src: "images/floated/potensi-image-14.png",
                position: "top-[180px] left-[36px] -z-10",
                size: "w-[98px] ",
              },
              {
                src: "images/floated/potensi-image-15.png",
                position: "top-[230px] right-[112px] -z-10",
                size: "w-[80px] ",
              },
            ]}
          />

          {/* TABEL PRODUKSI KOLTIKULTURA*/}
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
                      "font-semibold text-[14px] text-black md:text-[36px] lg:text-[64px]",
                  },
                  {
                    title: "Kecamatan Bringin ",
                    classname:
                      "text-primary font-semibold text-[14px] md:text-[36px] md:top-0 lg:text-[64px]",
                  },
                ]}
              />
            </h2>
            <TableProduction data={DataBuah} />
          </div>
        </section>

        {/* SECTION VIDEO BERKELANJUTAN PERTANIAN PISANG */}
        <section className="relative w-full pt-0 mt-7">
          <h2 className="px-20 text-center leading-[16px] mb-5">
            <HeadSection
              content={[
                {
                  title: "",
                  className: "font-semibold text-[14px]",
                },
                {
                  title: "Video Berkelanjutan ",
                  classname:
                    "font-semibold text-[14px] text-black md:text-[36px] lg:text-[64px]",
                },
                {
                  title: "Pertanian Pisang ",
                  classname:
                    "text-primary font-semibold text-[14px] md:text-[36px] md:top-0 lg:text-[64px]",
                },
              ]}
            />
          </h2>
          <div className="w-full px-5 mt-7">
            <Pagination
              data={DataVideoPertanianPisang}
              CardComponent={CardVideo}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PotensiPertanian;
