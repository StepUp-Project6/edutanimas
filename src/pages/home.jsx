import HeadSection from "../components/Elements/HeadSection";
import Navbar from "../components/Fragments/Navbar";
import InfoCard from "../components/Elements/InfoCard";
import SectionImage from "../components/Layouts/SectionImage";
import Card from "../components/Elements/Card";

const Home = () => {
  const items = [
    {
      title: "Sosialisasi Pertanian",
      description: "Kegiatan Tani Mas diawali dengan Sosialisasi Pertanian Masuk Sekolah di Dinas Pangan Provinsi yang bersangkutan dilanjutkan dengan pendampingan penyusunan RAB di sekolah penerima kegiatan.",
    },
    {
      title: "Rapat Koordinasi",
      description: "Dalam rapat tersebut, Dinas Pangan Provinsi menyampaikan materi terkait Pertanian Masuk Sekolah (PMS), BPTP menyampaikan materi teknologi budidaya tanaman hortikultura ramah lingkungan.",
    },
    {
      title: "Komoditas",
      description: "Tim sosialisasi berupaya membangkitkan minat siswa agar mau bertani sebagai salah satu solusi dari masalah regenerasi petani di masa mendatang dan sebagai media pembelajaran siswa untuk mengetahui bidang pertanian.",
    },
  ];
  return (
    <>
      <Navbar />
      <section className="mt-16 w-full relative h-[550px]">
        <SectionImage
          images={[
            {
              src: "images/home/home-1.png",
              position: "top-32 left-0",
              size: "w-[122px] h-[132px] lg:w-[200px] lg:h-[217px]",
            },
            {
              src: "images/home/home-2.png",
              position: "top-80 left-8",
              size: "w-[91px] h-[95px] lg:w-[141px] lg:h-[137px]",
            },
            {
              src: "images/home/home-5.png",
              position: "top-96 left-40",
              size: "w-[82px] h-[80px] lg:w-[123px] lg:h-[109px]",
            },
            {
              src: "images/home/home-4.png",
              position: "top-48 right-[56px]",
              size: "w-[128px] h-[140px] lg:w-[222px] lg:h-[221px]",
            },
            {
              src: "images/home/home-3.png",
              position: "top-40 right-32 -z-10",
              size: "w-[65px] h-[59px] lg:w-[68px] lg:h-[62px]",
            },
          ]}
        />
        <div className="flex justify-center">
          <div className="flex flex-col text-center font-bold lg:w-[790px]">
            <div>
              <HeadSection
                content={[
                  {
                    title: "Edukasi ",
                    classname: "",
                  },
                  { title: "Pertanian ", classname: "text-primary" },
                  { title: "Masuk ", classname: "" },
                  { title: "Sekolah ", classname: "", highlight: true },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center absolute bottom-0 inset-x-0 ">
          <a href="" target="_blank" className="btn bg-primary text-xs py-3 px-6 text-white font-bold rounded-[10px]">
            Get Started
          </a>
        </div>
      </section>

      {/* Petani Indonesia */}
      <section className="mt-[60px] ml-[20px] mr-[20px] md:ml-[40px] md:mr-[40px] lg:ml-[55px] lg:mr-[55px] xl:ml-[70px] xl:mr-[70px] ">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Bagian Kiri: Judul dan Teks */}
          <div className="md:w-[60%]">
            <div className="flex justify-start ">
              <HeadSection content={[{ title: "Petani di " }, { title: "Indonesia", classname: "text-primary" }]} />
            </div>

            <p className="mt-[10px] text-justify text-xs font-mulish text-gray-600 md:text-[14px] lg:text-[16px] xl:text-[18px]">
              Minat generasi muda menggeluti bidang pertanian masih sangat rendah. Hal ini dibuktikan dengan data petani di Indonesia saat ini berjumlah 33,1 juta orang yang terdiri dari petani kolonial sebanyak 30,4 juta petani dan petani
              milenial 2,7 juta orang (sumber: Statistik Ketenagakerjaan).
            </p>

            <p className="mt-[10px] text-justify text-xs font-mulish text-gray-600 md:text-[14px] lg:text-[18px]">
              Kementerian Pertanian RI memiliki program yang bertujuan meningkatkan minat generasi muda untuk menggeluti bidang pertanian yaitu Pertanian Masuk Sekolah (Tani Mas).
            </p>
          </div>

          {/* Bagian Kanan: Gambar */}
          <div className="flex justify-center mt-[25px] md:mt-0 md:w-[35%]">
            <img src="/images/diagram.png" alt="Diagram" className="w-[198px]" />
          </div>
        </div>
      </section>

      {/* TaniMas */}
      <section className="mt-[40px] ml-[20px] mr-[20px] md:ml-[40px] md:mr-[40px] lg:ml-[55px] lg:mr-[55px] xl:ml-[70px] xl:mr-[70px] xl:mt-[88px]">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Bagian teks - 70% */}
          <div className="md:w-[70%] md:pr-[20px]">
            <div className="flex justify-start">
              <HeadSection content={[{ title: "Apa itu " }, { title: "Tani Mas?", classname: "text-primary" }]} />
            </div>
            <div>
              <p className="mt-[10px] text-justify text-xs font-mulish text-gray-600 md:text-[14px] lg:text-[16px] xl:text-[18px]">
                Tani Mas merupakan kegiatan budidaya pertanian yang dilaksanakan oleh siswa dan guru di lingkungan sekolah sebagai salah satu program unggulan 100 hari kerja Menteri Pertanian RI. Program Tani Mas meningkatkan pengetahuan
                siswa terhadap budidaya pertanian dan menumbuhkan semangat siswa menjadi agripreneur serta meningkatkan ketersediaan dan akses pangan.
              </p>
            </div>

            <div className="mt-[30px]">
              {items.map((item, index) => (
                <InfoCard key={index} title={item.title} description={item.description} />
              ))}
            </div>
          </div>

          {/* Bagian gambar - 30% */}
          <div className="mt-[20px] ml-[24px] mr-[24.5px] md:mt-0 md:w-[30%] md:flex md:items-center">
            <img src="/images/petani.png" alt="Gambar Petani" className="md:max-w-full" />
          </div>
        </div>
      </section>

      {/* Kriteria Sekolah */}
      <section className="mt-[50px] ml-[20px] mr-[20px] md:ml-[40px] md:mr-[40px] lg:ml-[55px] lg:mr-[55px] xl:ml-[70px] xl:mr-[70px] xl:mt-[104px] ">
        <div className="flex justify-center">
          <HeadSection content={[{ title: "Kriteria " }, { title: "Sekolah", classname: "text-primary" }]} />
        </div>
        <div className="mt-[5px] xl:mt-[15px]">
          <p className="text-xs font-mulish text-gray-600 text-center md:text-[14px] md:text-center lg:text-[16px] xl:text-[18px] xl:text-center">
            Penunjukan sekolah yang melaksanakan program Tani Mas berdasarkan kriteria yang ditetapkan oleh Kementan RI antara lain:</p>
        </div>

        {/* Layout grid untuk item Card */}
        <div className="mt-[22px] grid grid-cols-1 gap-[10px] md:grid-cols-2 md:gap-x-[40px] md:gap-y-[20px] md:mt-[30px] xl:mt-[36px] xl:gap-x-[40px] xl:gap-y-[30px]">
          <Card imageSrc="/images/card/card-1.png" title="Lokasi Sekolah" description="Sekolah berlokasi di Ibukota Provinsi atau di Kabupaten/Kota terdekat dengan Ibukota provinsi" />
          <Card imageSrc="/images/card/card-2.png" title="Lokasi Sekolah" description="Memiliki lahan / kebun sekolah minimal 500 m2" />
          <Card imageSrc="/images/card/card-3.png" title="Sumber Air" description="Terdapat sumber air untuk budidaya pertanian" />
          <Card imageSrc="/images/card/card-4.png" title="Ekstrakurikuler" description="Diutamakan yang memiliki ekstrakurikuler pertanian" />
          <Card imageSrc="/images/card/card-5.png" title="Dukungan Pihak Sekolah" description="Pihak sekolah (guru dan siswa) proaktif dan bersemangat dalam kegiatan ini" />
          <Card imageSrc="/images/card/card-6.png" title="Rumah Bibit" description="Mempunyai lahan untuk membangun rumah bibit minimal 15 m2." />
        </div>
      </section>

      {/* Data Edutanimas */}
      <section className="w-full h-[834px] bg-white-500 border border-black mt-[50px] xl:mt-[91px]">
        <div className="text-center mt-[10px]">
          <HeadSection
            content={[
              {
                title: "Data ",
                classname: "",
              },
              { title: "Edutanimas ", classname: "text-primary" },
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
