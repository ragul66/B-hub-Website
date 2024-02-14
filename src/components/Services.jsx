import webd from "../assets/webd.jpg";
import adminimg from "../assets/adminimg.png";
import mediaimg from "../assets/mediaimg.webp";
import contentimg from "../assets/contentimg.jpg";
import Marquee from "react-fast-marquee";
import '../index.css'

const Services = () => {


  return (
    <div className="service">

      <Marquee speed={300} className="font-primary text-textcolor-0 -mt-52 text-[300px]">
        <h1>Portfolio</h1>
      </Marquee>

      <div className=" font-primary title lg:text-6xl lg:text-textcolor-0 lg:text-center lg:mt-36 lg:text-[70px] lg:mb-48">
        Services Provided
      </div>


      <div className="service1">
        <div>

        </div>
      </div>
    </div>
  );
};



export default Services;