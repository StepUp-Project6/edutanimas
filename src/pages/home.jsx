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
      </section>
      <section>
        <div className="flex justify-start">
          <HeadSection
            content={[
              { title: "Petani di " },
              { title: "Indonesia", classname: "text-primary" },
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
