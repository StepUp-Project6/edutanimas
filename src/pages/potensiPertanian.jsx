import React from "react";
import Navbar from "../components/Fragments/Navbar";
import HeadSection from "../components/Elements/HeadSection";

const PotensiPertanian = () => {
  return (
    <div className="font-mulish min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full mt-[70px] border border-black">
        <HeadSection
          content={[
            { title: "Hasil " },
            { title: "Pertanian", classname: "text-primary" },
          ]}
        />
      </main>
    </div>
  );
};

export default PotensiPertanian;
