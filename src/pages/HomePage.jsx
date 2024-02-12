import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import MovingText from "../components/MovingText";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Title from "../components/Title";
import TypingText from "../components/TypingText";
import Whatsapp from "../components/Whatsapp";

const Home = () => {
  return (
    <>
      <div className="bg-background-0 w-full h-full">
        <Navbar />
        <Title />
        <Services />
        <TypingText />
        <MovingText />
        <Carousel />
        <Footer />
        <Whatsapp />
      </div>
    </>
  );
};

export default Home;
