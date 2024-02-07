import { useNavigate } from "react-router-dom";
import Whatsapp from "./Whatsapp";

const Footer = () => {

  const navigate = useNavigate();

  const handlecontact = () => {
    navigate("/Contact")
  }

  return (
    <div className="  lg:bg-background-0 lg:w-full ">
      <div className="sm: text-textcolor-0 sm: font-primary  lg:font-primary ">
        <p className=" lg:align-middle lg:text-textcolor-0   lg:text-[150px] lg:text-center lg:mt-28">
          Let's create something
        </p>
        <p className="text-[175px] lg:text-textcolor-0 lg:text-center lg:-mt-24">
          MEANINGFUL
        </p>
        <p className="  text-[75px] text-center -mt-12">
          TOGETHER (but not Forever)
        </p>
        <button className="text-textcolor-0 border-2 text-[25px] px-3 rounded-full border-textcolor-0 hover:bg-textcolor-0 hover:font-semibold hover:text-background-0" onClick={handlecontact}>
          ContactUs
        </button>
        <p className="text-center -mt-6 text-[15px]">Cpoyrights@ B-Hub Consultancy & Services</p>
      </div>
      <Whatsapp />
    </div>
  );
};

export default Footer;
