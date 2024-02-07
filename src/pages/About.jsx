// import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Marquee from "react-fast-marquee";
import Header from '../components/Header'
// Team images
import gowtham from "../assets/gowtham.jpg";
import yohitha from "../assets/yohitha.jpg";
import sree from "../assets/sree.jpg";
import Aravindh from "../assets/ARAVIND.jpg";
import Ragul from "../assets/Ragul.jpg";
import webd from "../assets/ARAVIND.jpg";
// import Aravindh from "../assets/ARAVIND.jpg";
// import Aravindh from "../assets/ARAVIND.jpg";
// import Aravindh from "../assets/ARAVIND.jpg";
// import Aravindh from "../assets/ARAVIND.jpg";
// import Aravindh from "../assets/ARAVIND.jpg";

const About = () => {

    const data = [
        {
            img: gowtham,
            heading: "Gowtham Raj.S"
        },
        {
            img: yohitha,
            heading: "Yohitha.S"
        },
        {
            img: sree,
            heading: "Sree Aranganathan.D"
        },
        {
            img: Aravindh,
            heading: "Aravindhan.U.D"
        },
        {
            img: Ragul,
            heading: "Ragul vasanth.S.M"
        },
        {
            img: webd,
            heading: "Ragul vasanth"
        },
        {
            img: webd,
            heading: "Ragul vasanth"
        },
        {
            img: webd,
            heading: "Ragul vasanth"
        },
        {
            img: webd,
            heading: "Ragul vasanth"
        },
        {
            img: webd,
            heading: "Ragul vasanth"
        },
        {
            img: webd,
            heading: "Ragul vasanth"
        },
        {
            img: webd,
            heading: "Ragul vasanth"
        },
        {
            img: webd,
            heading: "Ragul vasanth"
        },
        {
            img: webd,
            heading: "Ragul vasanth"
        },
        {
            img: webd,
            heading: "Ragul vasanth"
        },
        {
            img: webd,
            heading: "Ragul vasanth"
        }
    ]

    // const project = [
    //     {
    //         image: webd
    //     }
    // ]
    return (
        <>
            <div className='text-textcolor-0 bg-background-0 w-full h-max'>
                <Header />
                <div className='font-primary'>
                    <h1 className='mt-12 text-[25px] text-center'><q>Elevate Your Digital Future with Our IT Expertise</q></h1>
                    <h1 className='text-[100px] text-center mt-36'>We Are Creative And Phenomenal</h1>
                    <p className=' text-center text-[20px] ml-2 mr-2'><q>At B-Hub, we offer a range of professional services to meet various digital needs. We specialize in Web designing, Web development, and UI/UX design, combining creativity and technical skills to <br /> create visually appealing and highly functional solutions. Our expertise also extends to media works, where we focus on producing impactful visual content. Additionally, we actively collaborate on college projects, supporting the educational and professional growth of students. Whether you need a beautiful website, a seamless user experience, compelling media content, or assistance with academic projects, our dedicated team is committed to exceeding expectations and delivering excellence in every project.</q></p>

                    <div>
                        <Marquee speed={300} gradient={false} className="mt-[81px] text-[200px]">
                            <div className="announcement">
                                <div className="announcement-text text1">
                                    <span>Our vision is to be the trusted partner for businesses,  We aim to simplify complexity, empower growth, and ensure our clients stay ahead in the ever-evolving digital landscape,</span>
                                    <span>delivering cutting-edge IT solutions that drive efficiency, innovation, and success.</span>
                                    <span>stay ahead in the ever-evolving digital landscape.</span>
                                </div>
                            </div>
                        </Marquee>
                    </div>

                    {/* Team Mates Card */}
                    <div>
                        <div >
                            <p className='text-center text-[30px] ml-12'>Create Positive Goals in your life & <br /> reach them as happy as you can</p>
                        </div>

                        <h1 className='text-center text-[70px] mt-12'>Our Team</h1>

                        <div className=' space-x-6 grid grid-cols-4 grid-flow-row  p-6 animate-fade-up animate-once animate-fade-up'>
                            {(data.map((d) => (
                                <>
                                    <div className='  border-8 border-textcolor-0 w-fit rounded-bl-2xl rounded-tr-2xl mt-8  ease-in-out delay-150 bg-blue-500 hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 transform transition-all'>
                                        <img className="p-2" src={d.img} />
                                        <h1 className="border-b-2 w-12"></h1>
                                        <p className="text-center mb-2">{d.heading}</p>
                                    </div>
                                </>
                            )))}
                        </div>
                    </div>
                    {/* Team Mates Card Ends */}

                    {/* Projects section starts */}
                    <div>
                        <h1 className='text-center text-[70px]'>Projects</h1>

                        <div className=' space-x-5 grid grid-cols-4 p-4 animate-fade-up animate-once animate-fade-up'>
                            {/* {(project.map((d) => (
                                <>
                                    <div>
                                        <img className="p-2" src={d.image} />

                                    </div>
                                </>
                            )))} */}
                        </div>

                    </div>
                    {/* Project Section Ends */}

                </div>
            </div>
        </>
    )
}

export default About