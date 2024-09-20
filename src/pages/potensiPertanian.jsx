import React from "react";
import Navbar from "../components/Fragments/Navbar";
import HeadSection from "../components/Elements/HeadSection";
import TextParagraph from "../components/Elements/TextParagraph";
import { DataHoltikultura } from "../utils/DataHoltikultura";
import TableProduction from "../components/Fragments/TableProduction";

const PotensiPertanian = () => {
  return (
    <div className="font-mulish min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full mt-[70px] border border-black pb-40">
        <HeadSection
          content={[
            { title: "Hasil " },
            { title: "Pertanian", classname: "text-primary" },
          ]}
        />
        <TextParagraph
          customClassname="text-center mt-3 px-14"
          content="Potensi Hasil Pertanian di Kecamatan Bringin disajikan dalam tabel di bawah ini."
        />
        {/* SECTION PRODUKSI HOLTIKULTURA*/}
        <section className="relative w-full border border-black pt-[510px] mt-14 h-[950px]">
          <img
            src="images/element-bg-3.png"
            alt="bg"
            className="absolute bottom-0 w-full -z-50"
          />
          {/* IMAGE ABSOLUTE 1 : PRODUKSI HOLTIKULTURA */}

          {/* TABEL PRODUKSI KOLTIKULTURA*/}
          <div className="px-6">
            <h2 className="px-10 leading-[16px]">
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
