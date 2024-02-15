import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Title from "../components/Title";
import Whatsapp from "../components/Whatsapp";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <>
      <div className="bg-background-0 w-full h-full">
        <Navbar />
        <Title />
        <Marquee
          speed={300}
          className="-mt-48 text-[300px] service lg:text-textcolor-0 font-primary"
        >
          <h1>Portfolio</h1>
        </Marquee>

        <Services />
        {/* <Carousel /> */}
        <Footer />
        <Whatsapp />
      </div>
    </>
  );
};

export default Home;
