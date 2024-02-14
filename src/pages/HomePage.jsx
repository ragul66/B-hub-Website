// import Carousel from "../components/Carousel";
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Title from "../components/Title";
import Whatsapp from "../components/Whatsapp";

const Home = () => {
  return (
    <>
      <div className="bg-background-0 w-full h-full">
        <Navbar />
        <Title />
        <Services />
        <Whatsapp />
        {/* <Carousel /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
