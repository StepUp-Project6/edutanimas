import HeadSection from "../components/Elements/HeadSection";
import Navbar from "../components/Fragments/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="mt-16 w-full">
        <div className="flex justify-center">
          <HeadSection
            width="lg:w-[584px]"
            content={[
              {
                title: "Edukasi ",
                classname: "",
              },
              { title: "Pertanian ", classname: "text-primary" },
              { title: "Masuk ", classname: "" },
              { title: "Sekolah", classname: "", highlight: true },
            ]}
          />
        </div>
        <div>

        </div>
        <div className="flex justify-center items-center">
          <a href="" 
          target="_blank" 
          className="btn bg-primary text-xs py-3 px-6 text-white font-bold rounded-[10px] "
          >Get Started</a>
        </div>
      </section>
      <section className="mt-[60px] ml-[21px] mr-[21.5px]">
        <div className="flex justify-start">
          <HeadSection
            content={[
              { title: "Petani di " },
              { title: "Indonesia", classname: "text-primary" },
            ]}
          />
        </div>
        <p className="mt-[10px] text-justify">
        Minat generasi muda menggeluti bidang pertanian masih sangat rendah. 
        Hal ini dibuktikan dengan data petani di Indonesia saat ini berjumlah 33,1 juta 
        orang yang terdiri dari petani kolonial sebanyak 30,4 juta petani dan petani milenial 
        2,7 juta orang (sumber: Statistik Ketenagakerjaan). 
        </p>
        <p className="mt-[10px] text-justify">
        Kementerian Pertanian RI memiliki program yang bertujuan meningkatkan minat generasi muda
         untuk menggeluti bidang pertanian yaitu Pertanian Masuk Sekolah (Tani Mas).
        </p>
        <div className="mt-[20px] flex justify-center">
          <img src="/images/diagram.png" 
          alt=""
          className="w-[198px]" />
        </div>
      </section>
      <section className="mt-[40px] ml-[21px] mr-[21.5px]">
      <div className="flex justify-start">
          <HeadSection
            content={[
              { title: "Apa itu " },
              { title: "Tani Mas?", classname: "text-primary" },
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
