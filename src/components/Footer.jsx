import { useNavigate } from "react-router-dom";
import TypingText from "./TypingText";


const Footer = () => {
    const navigate = useNavigate();

    const handleContact = () => {
        navigate("/Contact");
    };

    return (
        <div className="lg:bg-background-0 lg:w-full ">
            <div className="text-textcolor-0 font-primary text-center lg:text-left mt-24">
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-col text-6xl font-extralight -mb-20 mr-2">
                        <p>Let's</p>
                        <p className="-mt-2">create</p>
                    </div>
                    <p className="flex flex-col text-9xl  -mb-14">something</p>
                </div>
                <p className=" lg:text-[150px] justify-center flex mt-6">MEANINGFUL</p>
                <div className="flex flex-row justify-center text-[60px] -mt-14">
                    <p className="font-bold">TOGETHER</p>
                    <p className="font-extralight flex flex-row">
                        (<TypingText text={"but not Forever"} />)
                    </p>
                </div>
            </div>
            <button
                className="text-textcolor-0 border-2 text-lg px-4 py-2 rounded-full border-textcolor-0 hover:bg-textcolor-0 hover:font-semibold hover:text-background-0 block mx-auto mt-8"
                onClick={handleContact}
            >
                Contact Us
            </button>
            <div className="text-textcolor-0 flex flex-row gap-4 p-4 mt-24 justify-center">

                <p className="text-sm text-center font-primary">
                    © B-Hub Consultancy & Services 2024
                </p>
            </div>
        </div>
    );
};

export default Footer;