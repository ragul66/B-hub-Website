import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Title from "../components/Title";
import Share from "../components/Share";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-background-0 w-full h-full">
        <Title />
        <Marquee
          speed={300}
          className="mt-56 text-[300px] service lg:text-textcolor-0 font-primary"
        >
          <h1>Portfolio</h1>
        </Marquee>

        <Services />
        {/* <Carousel /> */}
        <Footer />
        <Share />
      </div>
    </>
  );
};

export default Home;
