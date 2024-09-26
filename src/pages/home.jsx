import HeadSection from "../components/Elements/HeadSection";
import Navbar from "../components/Fragments/Navbar";
import InfoCard from "../components/Elements/InfoCard";
import SectionImage from "../components/Layouts/SectionImage";
import Card from "../components/Elements/Card";
import Footer from "../components/Fragments/Footer";
import { Helmet } from "react-helmet";
import TextParagraph from "../components/Elements/TextParagraph";
import {Link as LinkScroll} from "react-scroll"

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
    <div className="min-h-screen flex flex-col relative">
      <Helmet>
        <title>Beranda | EduTaniMas</title>
        <meta
          name="description"
          content="Tani Mas merupakan kegiatan budidaya pertanian yang dilaksanakan oleh siswa dan guru di lingkungan sekolah sebagai salah satu program unggulan 100 hari kerja Menteri Pertanian RI. Program Tani Mas meningkatkan pengetahuan siswa terhadap budidaya pertanian dan menumbuhkan semangat siswa menjadi agripreneur serta meningkatkan ketersediaan dan akses pangan."
        />
        <meta
          name="keywords"
          content="edutanimas, pertanian, pertanian berkelanjutan, edukasi pertanian, pembangunan pertanian, smansabri, sekolah, platform p5"
        />
        <link
          rel="canonical"
          href="https://edutanimas.vercel.app/"
        />
        <meta
          property="og:title"
          content="EduTaniMas - Edukasi Pertanian Masuk Sekolah"
        />
        <meta
          property="og:description"
          content="Tani Mas merupakan kegiatan budidaya pertanian yang dilaksanakan oleh siswa dan guru di lingkungan sekolah sebagai salah satu program unggulan 100 hari kerja Menteri Pertanian RI. Program Tani Mas meningkatkan pengetahuan siswa terhadap budidaya pertanian dan menumbuhkan semangat siswa menjadi agripreneur serta meningkatkan ketersediaan dan akses pangan."
        />
        <meta property="og:image" content="images/home-page.jpg" />
        <meta property="og:url" content="https://edutanimas.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <img src="images/element-bg-7.png" alt="bg" className="absolute top-[520px] lg:top-[610px] xl:top-[625px] w-full -z-50 md:hidden" />
      <img src="images/element-bg-5.png" alt="bg" className="hidden absolute md:top-[370px] lg:top-[460px] xl:top-[550px] w-full -z-50 md:block" />
      <img src="images/element-bg-8.png" alt="bg" className="hidden absolute md:top-[700px]  w-full -z-50 md:block" />
      <img src="images/element-bg-8.png" alt="bg" className="hidden absolute md:top-[750px] lg:top-[850px] w-full -z-50 md:block" />
      <section className="mt-16 w-full relative h-[550px] md:mt-0 md:h-[160px]  lg:h-[600px] xl:h-[600px] md:pb-[300px] md:pt-[80px] lg:pt-[100px] md:overflow-hidden">
        <SectionImage
          images={[
            {
              src: "images/home/home-1.png",
              position: "top-32 left-0 md:top-[85px] md:-left-9 md:mt-[-30px] lg:top-[110px] lg:-left-8 lg:mt-[-30px] xl:top-[140px] xl:-left-20 xl:mt-[-70px]",
              size: "w-[122px] h-[132px] lg:w-[160px] lg:h-[200px] xl:w-[200px] xl:h-[230px]",
            },
            {
              src: "images/home/home-2.png",
              position: "top-80 left-8 md:top-[195px] md:left-40 lg:top-[340px] lg:left-60",
              size: "w-[91px] h-[95px] lg:w-[131px] md:h-[127px] xl:w-[141px] xl:h-[137px]",
            },
            {
              src: "images/home/home-5.png",
              position: "top-96 left-40 md:ml-[300px] md:top-[270px] lg:ml-[450px] lg:top-[430px] xl:ml-[700px] xl:top-[400px]",
              size: "w-[82px] h-[80px] lg:w-[120px] lg:h-[122px] xl:w-[126px] xl:h-[132px]",
            },
            {
              src: "images/home/home-4.png",
              position: "top-48 right-[56px] md:right-7 md:top-[145px] lg:right-[-30px] lg:top-[230px] xl:right-7 xl:top-[220px]",
              size: "w-[128px] h-[140px] lg:w-[222px] lg:h-[221px]",
            },
            {
              src: "images/home/home-3.png",
              position: "top-40 right-32 -z-10 md:top-[115px] md:right-[120px] lg:top-[140px] lg:right-[100px] xl:top-[120px] xl:right-44",
              size: "w-[65px] h-[59px] lg:w-[110px] lg:h-[110px] xl:w-[130px] xl:h-[130px]",
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
                ]}
              />
              <HeadSection
                content={[
                  { title: "Masuk ", classname: "" },
                  { title: "Sekolah ", classname: "", highlight: true },
                ]}
              />
            </div>
          </div>
        </div>

        <LinkScroll to="target-section" spy={true} smooth={true} offset={-50} duration={500}>
          <div className="flex cursor-pointer justify-center items-center inset-x-0 mt-[440px] md:mt-[20px] lg:mt-[30px]">
            <p className="btnb bg-[#218225] text-xs text-center py-3 px-8 text-white font-bold rounded-[10px] xl:w-[168px] xl:h-[44px] xl:font-semibold xl:text-[18px]">
              Get Started
            </p>
          </div>
        </LinkScroll>
      </section>

      {/* Petani Indonesia */}
      <section id="target-section" className="mt-[60px] md:mt-[150px] lg:mt-[200px] xl:mt-[150px] ml-[20px] mr-[20px] md:ml-[40px] md:mr-[40px] lg:ml-[70px] lg:mr-[70px] xl:ml-[70px] xl:mr-[70px] ">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start lg:gap-x-[120px]">
          {/* Bagian Kiri: Judul dan Teks */}
          <div className="md:w-[60%] lg:w-[70%]">
            <div className="flex justify-start ">
              <HeadSection content={[{ title: "Petani di " }, { title: "Indonesia", classname: "text-primary" }]} />
            </div>
            <TextParagraph
              customClassname={"mt-[10px] text-justify leading-5 md:leading-7 text-xs font-mulish text-gray-600 md:text-[14px] lg:text-[16px] xl:text-[18px]"}
              content=" Minat generasi muda menggeluti bidang pertanian masih sangat
              rendah. Hal ini dibuktikan dengan data petani di Indonesia saat
              ini berjumlah 33,1 juta orang yang terdiri dari petani kolonial
              sebanyak 30,4 juta petani dan petani milenial 2,7 juta orang
              (sumber: Statistik Ketenagakerjaan)."
            />
            <TextParagraph
              customClassname={"mt-[10px] text-justify leading-5 md:leading-7 text-xs font-mulish text-gray-600 md:text-[14px] lg:text-[16px] xl:text-[18px]"}
              content="Kementerian Pertanian RI memiliki program yang bertujuan
              meningkatkan minat generasi muda untuk menggeluti bidang pertanian
              yaitu Pertanian Masuk Sekolah (Tani Mas)."
            />
          </div>

          {/* Bagian Kanan: Gambar */}
          <div className="flex justify-center mt-[25px] md:mt-0 md:w-[35%] lg:w-[30%]">
            <img src="/images/diagram.png" alt="Diagram" className="w-[198px]" />
          </div>
        </div>
      </section>

      {/* TaniMas */}
      <section className="mt-[40px] ml-[20px] mr-[20px] md:ml-[40px] md:mr-[40px] lg:ml-[70px] lg:mr-[70px] xl:ml-[70px] xl:mr-[70px] xl:mt-[88px]">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Bagian teks - 70% */}
          <div className="md:w-[70%] md:pr-[20px] lg:w-[70%]">
            <div className="flex justify-start">
              <HeadSection content={[{ title: "Apa itu " }, { title: "Tani Mas?", classname: "text-primary" }]} />
            </div>
            <div>
              <TextParagraph
                customClassname={"mt-[10px] text-justify leading-5 md:leading-7 text-xs font-mulish text-gray-600 md:text-[14px] lg:text-[16px] xl:text-[18px]"}
                content="Tani Mas merupakan kegiatan budidaya pertanian yang dilaksanakan
                oleh siswa dan guru di lingkungan sekolah sebagai salah satu
                program unggulan 100 hari kerja Menteri Pertanian RI. Program
                Tani Mas meningkatkan pengetahuan siswa terhadap budidaya
                pertanian dan menumbuhkan semangat siswa menjadi agripreneur
                serta meningkatkan ketersediaan dan akses pangan."
              />
            </div>
            <div className="mt-[30px]">
              {items.map((item, index) => (
                <InfoCard key={index} title={item.title} description={item.description} />
              ))}
            </div>
          </div>

          {/* Bagian gambar - 30% */}
          <div className="mt-[20px] ml-[24px] mr-[24.5px] md:mt-0 md:w-[30%] lg:w-[30%] md:flex md:items-center">
            <img src="/images/petani.png" alt="Gambar Petani" className="md:max-w-full" />
          </div>
        </div>
      </section>

      {/* Kriteria Sekolah */}
      <section className="mt-[50px] ml-[20px] mr-[20px] md:ml-[40px] md:mr-[40px] lg:ml-[70px] lg:mr-[70px] xl:ml-[70px] xl:mr-[70px] xl:mt-[104px] ">
        <div className="flex justify-center">
          <HeadSection content={[{ title: "Kriteria " }, { title: "Sekolah", classname: "text-primary" }]} />
        </div>
        <div className="mt-[5px] xl:mt-[15px]">
          <p className="text-xs font-mulish text-gray-600 text-center md:text-[14px] md:text-center lg:text-[16px] xl:text-[18px] xl:text-center">
            Penunjukan sekolah yang melaksanakan program Tani Mas berdasarkan kriteria yang ditetapkan oleh Kementan RI antara lain:
          </p>
        </div>

        {/* Layout grid untuk item Card */}
        <div className="mt-[22px] grid grid-cols-1 gap-[10px] md:grid-cols-2 md:gap-x-[40px] md:gap-y-[20px] md:mt-[30px] lg:mt-[36px] lg:gap-x-[120px]   xl:mt-[36px] xl:gap-x-[40px] xl:gap-y-[30px] xl:mr-[-30px]">
          <Card imageSrc="/images/card/card-1.png" title="Lokasi Sekolah" description="Sekolah berlokasi di Ibukota Provinsi atau di Kabupaten/Kota terdekat dengan Ibukota provinsi" />
          <Card imageSrc="/images/card/card-2.png" title="Lahan Sekolah" description="Memiliki lahan / kebun sekolah minimal 500 m2" />
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
