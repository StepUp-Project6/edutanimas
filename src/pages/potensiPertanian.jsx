import React from "react";
import Navbar from "../components/Fragments/Navbar";
import HeadSection from "../components/Elements/HeadSection";
import TextParagraph from "../components/Elements/TextParagraph";
import { DataHoltikultura } from "../utils/DataHoltikultura";
import TableProduction from "../components/Fragments/TableProduction";
import SectionImage from "../components/Layouts/SectionImage";

const PotensiPertanian = () => {
  return (
    <div className="font-mulish min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full mt-[70px] pb-40">
        <h1 className="text-center">
          <HeadSection
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
            className="absolute bottom-0 w-full -z-50"
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
      </main>
    </div>
  );
};

export default PotensiPertanian;
