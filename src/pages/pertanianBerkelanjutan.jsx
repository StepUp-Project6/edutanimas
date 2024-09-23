import HeadSection from "../components/Elements/HeadSection";
import HeadSection2 from "../components/Elements/HeadSection2";
import Navbar from "../components/Fragments/Navbar";
import Paragraph from "../components/Fragments/Paragraph";
import SectionImage from "../components/Layouts/SectionImage";
import NumberedList from "../components/Fragments/NumberedList";
import { tujuan } from "../utils/DataTujuan";
import { dimensi } from "../utils/DataDimensi";
import NumberedList2 from "../components/Fragments/NumberedList2";
import { image1, image2 } from "../utils/ImagePertanianOrganik";
import { kriteria } from "../utils/DataKriteria";
import { tantangan } from "../utils/DataTantangan";
import Logo from "../components/Elements/Logo";
import Table from "../components/Fragments/Table";

const PertanianBerkelanjutan = () => {
  return (
    <div className="no-scrollbar md:scrollbar-visible overflow-x-hidden">
      <Navbar />
      <section className="relative mt-16 lg:mt-40 w-full h-[100vh] lg:h-[730px] overflow-x-hidden ">
        <SectionImage
          images={[
            {
              src: "images/floated/floated-1.png",
              position: "top-32 left-0 lg:top-0 lg:-left-20",
              size: "w-[122px] h-[132px] lg:w-[200px] lg:h-[217px]",
            },
            {
              src: "images/floated/floated-2.png",
              position: "top-80 left-8 lg:top-72 lg:left-60",
              size: "w-[91px] h-[95px] lg:w-[141px] lg:h-[137px]",
            },
            {
              src: "images/floated/floated-3.png",
              position: "top-96 right-28 lg:right-80",
              size: "w-[82px] h-[80px] lg:w-[123px] lg:h-[109px]",
            },
            {
              src: "images/floated/floated-4.png",
              position: "top-48 right-[56px] lg:right-10 lg:top-32",
              size: "w-[128px] h-[140px] lg:w-[222px] lg:h-[221px]",
            },
            {
              src: "images/floated/floated-5.png",
              position: "top-40 right-32 lg:top-28 lg:right-48 -z-10",
              size: "w-[65px] h-[59px] lg:w-[68px] lg:h-[62px]",
            },
          ]}
        />
        <div className="flex justify-center">
          <HeadSection
            width="lg:w-[790px] font-bold text-center"
            content={[
              {
                title: "Pembangunan ",
                classname: "",
              },
              { title: "Pertanian ", classname: "text-primary" },
              { title: "Berkelanjutan", classname: "", highlight: true },
            ]}
          />
        </div>
        <div className="absolute inset-x-0 bottom-10 lg:bottom-[60%] flex justify-center items-center">
          <a
            href=""
            className="text-xs lg:text-lg font-semibold bg-[#218225] text-white px-8 py-3 rounded-[10px]"
          >
            Get Started
          </a>
        </div>
      </section>
      <section className="">
        <div className="pl-5 lg:pl-20">
          <HeadSection2
            width="lg:w-[790px] font-semibold text-start"
            content={[{ title: "Defenisi", classname: "", highlight: true }]}
          />
          <HeadSection2
            classname="text-sm lg:text-2xl mb-2 mt-3"
            width=" font-semibold text-start"
            content={[
              { title: "Pertanian Berkelanjutan ", classname: "" },
              { title: "menurut para ahli", classname: "text-primary" },
            ]}
          />
          <div className="flex flex-row justify-between">
            <div className="w-[848px]">
              <div className="w-full pr-5">
                <Paragraph
                  classname={"mb-5"}
                  text={
                    "Pertanian berkelanjutan adalah usaha pertanian yang memanfaatkan  sekaligus melestarikan sumber daya secara optimal untuk menghasilkan  produk panen secara optimal, menggunakan masukan sarana dan biaya yang  wajar, sanggup memenuhi kriteria sosial, ekonomi, kelestarian  lingkungan, dan menggunakan sarana produksi yang terbarukan serta  menghasilkan produktivitas sumber daya sepanjang masa."
                  }
                  highlight={3}
                />
                <Paragraph
                  text={
                    "Komponen  operasional dan tindak lanjut yang perlu dilakukan dalam melaksanakan  pertanian berkelanjutan antara lain yaitu proses produksi yang tepat dan  efisien, tindakan pelestarian/meningkatkan kualitas sumberdaya lahan  dan air, penyediaan panduan teknologi konservasi mutu sumberdaya  pertanian dan lingkungan, penataran penyuluh lapang, penyuluhan kepada  petani, pengadopsian kebijakan tentang pertanian berkelanjutan,  peningkatan kesadaran pentingnya penerapan pertanian berkelanjutan, dan  perlunya Pemerintah merintis penerapan sistem sertifikasi proses  produksi komoditas pertanian."
                  }
                  highlight={5}
                  classname={"mb-5"}
                />
              </div>
              <div className="relative">
                <img
                  src="images/defenisi/group-1.png"
                  alt=""
                  className="absolute -z-10 scale-150 top-10  h-auto lg:hidden"
                />
              </div>
              <div className="pr-5">
                <Paragraph
                  text={
                    "Konsep keberlanjutan pertanian mengandung  lima alternatif pengertian, yaitu utilitas yang diperoleh masyarakat  tidak berkurang sepanjang waktu, pengelolaan sumber daya alam untuk  memelihara kesempatan produksi dimasa mendatang, sumber daya alam tidak  berkurang sepanjang waktu, sumber daya alam dikelola untuk  mempertahankan produksi jasa sumber daya alam, dan terpenuhinya  keseimbangan dan daya tahan ekosistem."
                  }
                  highlight={3}
                  classname={"mt-[237px] mb-5 lg:mt-0"}
                />
                <Paragraph
                  text={
                    "Berdasarkan pengertian dari para  ahli, maka dapat disimpulkan bahwa pembangunan pertanian berkelanjutan  adalah kegiatan pembangunan di bidang pertanian melalui pemanfaatan  sumber daya secara optimal dan lestari dengan menggunakan input sarana  produksi terbarukan dan biaya yang wajar, serta sanggup memenuhi  kriteria sosial, ekonomi, menjaga kelestarian lingkungan, dan sehingga  dapat menghasilkan produktivitas pertanian jangka panjang untuk memenuhi  kebutuhan sekarang dan di masa yang akan datang."
                  }
                  highlight={5}
                  classname={"mb-5"}
                />
              </div>
            </div>
            <div>
              <img
                src="images/defenisi/group-2.png"
                alt=""
                className="-z-10 scale-150 w-[374px] h-[743px] lg:scale-100 top-10 hidden lg:block"
              />
            </div>
          </div>
        </div>
      </section>
      {/* TUJUAN */}
      <section className="pt-20">
        <div className="px-5 lg:pl-20">
          <HeadSection2
            width="lg:w-[790px] font-semibold text-start"
            content={[{ title: "Tujuan", classname: "", highlight: true }]}
          />
          <HeadSection2
            classname="text-sm lg:text-2xl mb-2 mt-3"
            width=" font-semibold text-start"
            content={[
              { title: "Tujuan Pertanian ", classname: "" },
              { title: "Berkelanjutan", classname: "text-primary" },
            ]}
          />
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:pt-12 ">
          <div className="px-5 lg:pl-0 lg:pr-16 lg:pt-10">
            <Paragraph
              text={
                "Tujuan pembangunan pertanian berkelanjutan menurut Pretty dalam Dahuri, R. (2020) adalah:"
              }
              highlight={3}
              classname={"mb-5 lg:mt-0"}
            />
            <NumberedList
              header={false}
              content={tujuan}
              classname={"items-start"}
            />
          </div>
          <div>
            <img
              src="images/tujuan/group-2.png"
              alt=""
              className="-z-10 scale-150 lg:scale-100 mt-16 lg:hidden"
            />
            <img
              src="images/tujuan/group-1.png"
              alt=""
              className="-z-10 max-w-[292px] hidden lg:block"
            />
          </div>
        </div>
      </section>
      <section className="pt-20 lg:h-[888px]">
        <div className="px-5 lg:pl-20">
          <HeadSection2
            width="lg:w-[790px] font-semibold text-start"
            content={[{ title: "Dimensi", classname: "", highlight: true }]}
          />
          <HeadSection2
            classname="text-sm lg:text-2xl mb-2 mt-3"
            width=" font-semibold text-start"
            content={[
              { title: "Dimensi Pembangunan ", classname: "" },
              { title: " Pertanian Berkelanjutan", classname: "text-primary" },
            ]}
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:pt-5">
          <div className="px-5 lg:pl-20 lg:pr-0 relative">
            <Paragraph
              text={
                "Cakupan atau dimensi keberlanjutan pertanian menurut Wood dalam Lagiman (2020) meliputi :"
              }
              highlight={3}
              classname={"mb-5 lg:mt-0"}
            />
            <div className="lg:pr-[620px]">
              <NumberedList header={false} content={dimensi} classname={" "} />
            </div>
          </div>
          <div className="">
            <img
              src="images/dimensi/group-1.png"
              alt=""
              className="-z-10 scale-100 lg:scale-100 mt-2 lg:hidden"
            />
            <img
              src="images/dimensi/group-2.png"
              alt=""
              className="-z-10 max-w-[620px] absolute -mt-20 right-0 hidden lg:block"
            />
          </div>
        </div>
      </section>
      <section className="">
        <div className="flex justify-center px-8 w-full">
          <HeadSection
            classname=""
            width="lg:w-[790px] font-bold text-center"
            content={[
              {
                title: "Contoh Penerapan ",
                classname: "",
              },
              { title: "Pertanian Berkelanjutan", classname: "text-primary" },
            ]}
          />
        </div>
        <div className="w-full px-5 lg:px-20 pt-10">
          <NumberedList2
            content={[
              {
                id: 1,
                classname: "",
                title: [
                  { word: "Pertanian", classname: "" },
                  { word: "Organik", classname: "text-primary" },
                ],
              },
            ]}
          />
          <Paragraph
            text="Pertanian organik adalah metode produksi yang mengutamakan perlindungan  lingkungan untuk menciptakan agroekosistem yang optimal dan lestari,  baik secara sosial, ekologi, ekonomi, maupun etika. Metode ini  menghindari penggunaan input kimia seperti pupuk dan pestisida.  Teknik-teknik pertanian organik merupakan bagian dari pendekatan  pertanian berkelanjutan yang menekankan pada pelestarian dan konservasi  sumber daya alam untuk menciptakan keseimbangan ekosistem dan memberikan  kontribusi pada kelestarian. Beberapa kegiatan yang menunjang pertanian  berkelanjutan Sudirja dalam Lagiman (2020) antara lain pengendalian hama terpadu, konservasi tanah,  menjaga kualitas air, tanaman pelindung, diversifikasi pertanian,  pengelolaan nutrisi tanaman, dan agroforestri."
            highlight={2}
            classname={""}
          />
          <div className="grid grid-cols-3 gap-2 lg:gap-7 mt-5">
            <img
              key={image1[0].id}
              src={image1[0].src}
              alt=""
              className={`${image1[0].classname}`}
            />
            <div className="grid grid-cols-2 gap-2 lg:gap-7">
              <img
                key={image1[1].id}
                src={image1[1].src}
                alt=""
                className={`${image1[1].classname}`}
              />
              <img
                key={image1[2].id}
                src={image1[2].src}
                alt=""
                className={`${image1[2].classname}`}
              />
              <img
                key={image1[3].id}
                src={image1[3].src}
                alt=""
                className={`${image1[3].classname} col-span-2`}
              />
            </div>
            <img
              key={image1[4].id}
              src={image1[4].src}
              alt=""
              className={`${image1[4].classname}`}
            />
          </div>
        </div>
        <div className="w-full px-5 lg:px-20 pt-10">
          <NumberedList2
            content={[
              {
                id: 2,
                classname: "",
                title: [
                  { word: "Rotasi Tanaman", classname: "" },
                  // { word: "Organik", classname: "text-primary" },
                ],
              },
            ]}
          />
          <Paragraph
            text="Rotasi Tanaman adalah praktik penanaman beberapa jenis tanaman secara  bergiliran pada satu luasan lahan. Dalam perkembangannya, pola rotasi  memiliki banyak tujuan dan pertimbangan, seperti meningkatkan ketahanan  pangan, mempertimbangkan harga pasar, memenuhi nilai budaya/tradisi,  meningkatkan kesuburan/kimia tanah, meningkatkan kualitas struktur  tanah, mencegah akumulasi hama dan penyakit, meningkatkan populasi dan  jenis mikroorganisme penyubur tanah, dan meningkatkan produktivitas padi  dan jagung. Oleh karena itu, penentuan pola rotasi yang baik perlu  mempertimbangkan kondisi iklim dan ketersediaan air."
            highlight={2}
            classname={""}
          />
          <div className="grid grid-cols-3 gap-2 lg:gap-7 mt-5">
            <div className="grid grid-cols-2 gap-2 lg:gap-7">
              <img
                key={image2[1].id}
                src={image2[1].src}
                alt=""
                className={`${image2[1].classname}`}
              />
              <img
                key={image2[2].id}
                src={image2[2].src}
                alt=""
                className={`${image2[2].classname}`}
              />
              <img
                key={image2[3].id}
                src={image2[3].src}
                alt=""
                className={`${image2[3].classname} col-span-2`}
              />
            </div>
            <img
              key={image2[0].id}
              src={image2[0].src}
              alt=""
              className={`${image2[0].classname}`}
            />
            <img
              key={image2[4].id}
              src={image2[4].src}
              alt=""
              className={`${image2[4].classname}`}
            />
          </div>
        </div>
        <div className="w-full px-5 lg:px-20 pt-10">
          <NumberedList2
            content={[
              {
                id: 3,
                classname: "",
                title: [
                  { word: "Agroforestri", classname: "" },
                  // { word: "Organik", classname: "text-primary" },
                ],
              },
            ]}
          />
          <Paragraph
            text="Agroforestri merupakan salah satu sistem pengelolaan lahan yang mungkin dapat ditawarkan untuk mengatasi masalah yang timbul akibat adanya alih-guna lahan tersebut di atas dan sekaligus juga untuk mengatasi masalah pangan. Agroforestri berarti menanam pepohonan di lahan pertanian yang menjadikan petani atau masyarakat sebagai elemen pokoknya (subyek). Dengan demikian kajian agroforestri tidak hanya terfokus pada masalah teknik dan biofisik saja tetapi juga masalah sosial, ekonomi dan budaya yang selalu berubah dari waktu ke waktu, sehingga agroforestri merupakan cabang ilmu yang dinamis."
            highlight={1}
            classname={""}
          />
        </div>
      </section>
      <section className="pt-8">
        <div className="px-5 lg:pl-20">
          <HeadSection2
            width="lg:w-[790px] font-semibold text-start"
            content={[{ title: "Praktek", classname: "", highlight: true }]}
          />
          <HeadSection2
            classname="text-sm lg:text-2xl mb-2 mt-3"
            width=" font-semibold text-start"
            content={[
              { title: "Praktek ", classname: "" },
              { title: "Agroforestri", classname: "text-primary" },
            ]}
          />
          <Paragraph
            text="Praktek Agroforestri mengacu pada operasional pengelolaan lahan yang khas  dan didasarkan pada kepentingan/kebutuhan ataupun pengalaman dari  petani lokal atau unit manajemen lainnya, yang terdiri dari  komponen-komponen agroforestri. Praktek agroforestri dapat berkembang  menjadi sistem agroforestri pada kawasan yang lebih luas, namun juga  dapat berlangsung dalam suasana sistem yang bukan agroforestri, seperti  penanaman pohon-pohon turi di persawahan di Jawa."
            highlight={2}
            classname={""}
          />
          <Table />
        </div>
      </section>
      <section className="py-8 ">
        <div className="px-5 lg:pl-20">
          <HeadSection2
            width="lg:w-[790px] font-semibold text-start"
            content={[{ title: "Kriteria", classname: "", highlight: true }]}
          />
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="w-[736px]">
              <HeadSection2
                classname="text-sm lg:text-2xl mb-2 mt-3"
                width=" font-semibold text-start"
                content={[
                  { title: "Tiga Kriteria Desain ", classname: "" },
                  {
                    title: "Agroforestri yang Baik (Raintree, 1987)",
                    classname: "text-primary",
                  },
                ]}
              />
              <div>
                <NumberedList
                  header={true}
                  content={kriteria}
                  size="lg:min-w-12 lg:min-h-12 lg:max-w-12 lg:max-h-12 lg:text-2xl lg:me-5"
                />
              </div>
            </div>
            <img
              src="images/penerapan/kriteria-1.png"
              alt=""
              className="px-9 lg:min-w-[346px] lg:h-[511px]"
            />
          </div>
        </div>
      </section>
      <section className="pt-4 lg:py-8">
        <div className="flex justify-center px-5 w-full">
          <HeadSection
            classname="text-xl lg:text-[64px]"
            width="lg:w-[970px] font-bold text-center lg:leading-tight"
            content={[
              {
                title: "Tantangan Dalam Pembangunan ",
                classname: "",
              },
              { title: "Pertanian Berkelanjutan", classname: "text-primary" },
            ]}
          />
        </div>
        <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:pt-10">
          <div className="px-5 lg:px-0 lg:pr-16 lg:w-[952px]">
            <Paragraph
              text={
                "Pelaksanaan pembangunan pertanian berkelanjutan masih menghadapi berbagai tantangan menurut Dahuri, R. (2020) yaitu:"
              }
              highlight={4}
              classname={"mb-5 lg:mt-0"}
            />
            <NumberedList
              content={tantangan}
              size="lg:min-w-8 lg:min-h-8 lg:max-w-8 lg:max-h-8 lg:text-lg lg:me-5"
            />
          </div>
          <div className="">
            <img
              src="images/penerapan/tantangan-1.png"
              alt=""
              className="-z-10 scale-100 lg:scale-100 mt-2 lg:hidden"
            />
            <img
              src="images/penerapan/tantangan-2.png"
              alt=""
              className="-z-10 max-w-[342px] hidden lg:block"
            />
          </div>
        </div>
      </section>
      <div className="relative">
        <img src="images/footer-shape.png" alt="" className="-z-20 absolute -bottom-20 md:hidden" />
        <img src="images/footer-shape2.png" alt="" className="-z-20 absolute -bottom-52 hidden lg:block" />
      </div>
      <footer className="bg-primary text-white flex flex-col justify-center items-center pt-6">
        <div className="flex flex-row gap-1 items-end">
          <img
            src="images/logo-sma.png"
            alt=""
            className="h-[23px] w-[23px] lg:h-[35px] lg:w-[35px]"
          />
          <h2 className="text-sm lg:text-xl text-white font-semibold border-b-[1px] border-white">
            EduTaniMas
          </h2>
        </div>
        {/* <div className="flex flex-row items-baseline w-[276px] text-[10px] text-center"> */}
          <p className="flex flex-row justify-center items-baseline text-[10px] text-center px-10 pt-2">
            <span>
              <img src="svg/location.svg" alt="" className="w-4"/>
            </span>
            Jalan Wibisono, Gang II/No 3, Bringin, Semarang, Kabupaten Semarang,
            Jawa Tengah (50772)
          </p>
        {/* </div> */}
        <p className="text-[10px] text-center px-4 py-2">Email : wahyufauziyah2000@gmail.com | Whatsapp : 085876574032</p>
        <div className="w-full h-9 bg-[#043A3A]/30 rounded-t-lg"></div>
      </footer>
    </div>
  );
};

export default PertanianBerkelanjutan;
