import HeadSection from "../components/Elements/HeadSection";
import Navbar from "../components/Fragments/Navbar";
import InfoCard from "../components/Elements/InfoCard";

const Home = () => {
  const items = [
    {
      title: 'Sosialisasi Pertanian',
      description: 'Kegiatan Tani Mas diawali dengan Sosialisasi Pertanian Masuk Sekolah di Dinas Pangan Provinsi yang bersangkutan dilanjutkan dengan pendampingan penyusunan RAB di sekolah penerima kegiatan.',
    },
    {
      title: 'Rapat Koordinasi',
      description: 'Dalam rapat tersebut, Dinas Pangan Provinsi menyampaikan materi terkait Pertanian Masuk Sekolah (PMS), BPTP menyampaikan materi teknologi budidaya tanaman hortikultura ramah lingkungan.',
    },
    {
      title: 'Komoditas',
      description: 'Tim sosialisasi berupaya membangkitkan minat siswa agar mau bertani sebagai salah satu solusi dari masalah regenerasi petani di masa mendatang dan sebagai media pembelajaran siswa untuk mengetahui bidang pertanian.',
    },
  ];
  return (
    <>
      <Navbar />

      {/* Edukasi Pertanian Masuk Sekolah */}
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

      {/* Petani Indonesia */}
      <section className="mt-[60px] ml-[20px] mr-[20px] md:ml-[70px] ">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
      {/* Bagian Kiri: Judul dan Teks */}
      <div className="md:w-[60%]">
      <div className="flex justify-start">
        <HeadSection
          content={[
            { title: "Petani di " },
            { title: "Indonesia", classname: "text-primary" },
          ]}
        />
      </div>

      <p className="mt-[10px] text-justify text-xs font-mulish text-gray-600 lg:text-[18px]">
        Minat generasi muda menggeluti bidang pertanian masih sangat rendah. 
        Hal ini dibuktikan dengan data petani di Indonesia saat ini berjumlah 33,1 juta 
        orang yang terdiri dari petani kolonial sebanyak 30,4 juta petani dan petani milenial 
        2,7 juta orang (sumber: Statistik Ketenagakerjaan).
      </p>

      <p className="mt-[10px] text-justify text-xs font-mulish text-gray-600 lg:text-[18px]">
        Kementerian Pertanian RI memiliki program yang bertujuan meningkatkan minat generasi muda
        untuk menggeluti bidang pertanian yaitu Pertanian Masuk Sekolah (Tani Mas).
      </p>
      </div>

      {/* Bagian Kanan: Gambar */}
      <div className="flex justify-center mt-[25px] md:mt-0 md:w-[35%]">
      <img src="/images/diagram.png" alt="Diagram" className="w-[198px]" />
      </div>
    </div>
    </section>


      {/* Tani Mas */}
      <section className="mt-[40px] ml-[20px] mr-[20px] md:ml-[70px]">
      <div className="flex justify-start">
          <HeadSection
            content={[
              { title: "Apa itu " },
              { title: "Tani Mas?", classname: "text-primary" },
            ]}
          />
      </div>
      <div>
        <p className="mt-[10px] text-justify text-xs font-mulish text-gray-600" >
        Tani Mas merupakan kegiatan budidaya pertanian yang dilaksanakan oleh siswa dan guru 
        di lingkungan sekolah sebagai salah satu program unggulan 100 hari kerja Menteri Pertanian RI. 
        Program Tani Mas meningkatkan pengetahuan siswa terhadap budidaya pertanian dan menumbuhkan semangat 
        siswa menjadi agripreneur serta meningkatkan ketersediaan dan akses pangan
        </p>
      </div>
      <div className="mt-[20px] ml-[24px] mr-[24.5px] ">
        <img src="/images/petani.png" alt="" />
      </div>
      <div className="mt-[30px]">
      {items.map((item, index) => (
        <InfoCard 
          key={index} 
          title={item.title} 
          description={item.description} 
        />
      ))}
      </div>
      </section>

      {/* Kriteria Sekolah */}
      <section className="mt-[50px] ml-[20px] mr-[20px] ">
      <div className="flex justify-center">
          <HeadSection
            content={[
              { title: "Kriteria " },
              { title: "Sekolah", classname: "text-primary" },
            ]}
          />
      </div>
      <div className="mt-[5px]">
        <p className="text-xs font-mulish text-gray-600 text-center">
        Penunjukan sekolah yang melaksanakan program Tani Mas berdasarkan 
        kriteria yang ditetapkan oleh Kementan RI antara lain :
        </p>
      </div>
      </section>
    </>
  );
};

export default Home;
