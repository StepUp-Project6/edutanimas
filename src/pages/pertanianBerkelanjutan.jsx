import HeadSection from "../components/Elements/HeadSection";
import Navbar from "../components/Fragments/Navbar";
import SectionImage from "../components/Layouts/SectionImage";

const PertanianBerkelanjutan = () => {
  return (
    <>
      <Navbar />
      <section className="relative mt-16 w-full h-[100vh]">
        <SectionImage
          images={[
            {
              src: "images/floated/floated-1.png",
              position: "top-32 left-0",
              size: "w-[122px] h-[132px] lg:w-[200px] lg:h-[217px]",
            },
            {
              src: "images/floated/floated-2.png",
              position: "top-80 left-8",
              size: "w-[91px] h-[95px] lg:w-[141px] lg:h-[137px]",
            },
            {
              src: "images/floated/floated-3.png",
              position: "top-96 left-40",
              size: "w-[82px] h-[80px] lg:w-[123px] lg:h-[109px]",
            },
            {
              src: "images/floated/floated-4.png",
              position: "top-48 right-[56px]",
              size: "w-[128px] h-[140px] lg:w-[222px] lg:h-[221px]",
            },
            {
              src: "images/floated/floated-5.png",
              position: "top-40 right-32 -z-10",
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
          <button className></button>
        </div>
      </section>
      <section className="px-5">
        <HeadSection
          width="lg:w-[790px] font-semibold text-start"
          content={[
            { title: "Defenisi", classname: "", highlight: true },
          ]}
        />
      </section>
    </>
  );
};

export default PertanianBerkelanjutan;
