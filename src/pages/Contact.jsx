import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import Navbar from '../components/Navbar';
import {
    FaWhatsapp,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = () => {
    const [recipient, setRecipient] = useState('bhubconsultancy@gmail.com');

    const openGmailCompose = () => {
        // URL for opening Gmail compose window
        const url = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${recipient}`;
        // Open the Gmail compose window in a new tab
        window.open(url, '_blank');
    };


    return (
        <>
            <div className='bg-background-0 text-textcolor-0 min-h-screen w-screen font-primary relative'>
                <Navbar />
                <div className='h-screen justify-center items-center'>
                    <Marquee speed={300} className="text-[300px] z-1">
                        <h1 className="mt-48">GetInTouch</h1>
                    </Marquee>
                </div>
                <div className="bg-background-0 text-textcolor-0 absolute bottom-0 left-0 w-full">
                    <div className=' ml-auto text-background-0 fixed bottom-0 left-0 w-full bg-gray-900 text-white py-6 px-8'>
                        <div className="max-w-4xl mx-auto text-background-0">
                            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                            <p className="text-lg mb-4">Feel free to get in touch with us for any inquiries or feedback.</p>
                            <div className="text-sm">
                                <p className="font-bold">Email: <a href="mailto:contact@example.com" className="">bhubconsultancy@gmail.com</a></p>
                                <p>Phone: <a href="tel:+1234567890" className="font-bold">+918124813376</a></p>
                            </div>
                        </div>
                        <div className=" w-48 rounded-lg shadow-lg bg-white ring-1 ring-background-0 flex text-background-0 gap-3 p-3 bottom-0 right-0 mb-4 mr-3  absolute">
                            <a href="https://wa.me/8124813376" target="_blank"><FaWhatsapp
                                size={22}
                                className="cursor-pointer hover:scale-125"
                            /></a>
                            <a href="https://www.instagram.com/bhub_2024/" target="_blank"><FaInstagram size={22} className="cursor-pointer hover:scale-125" /></a>
                            <FaLinkedinIn size={22} className="cursor-pointer hover:scale-125" />
                            <FaYoutube size={22} className="cursor-pointer hover:scale-125" />
                            <FiMail size={22} className="cursor-pointer hover:scale-125" alt="Gmail Logo" onClick={openGmailCompose} />
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#E9DFCE" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,160C672,171,768,181,864,197.3C960,213,1056,235,1152,213.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Contact;



