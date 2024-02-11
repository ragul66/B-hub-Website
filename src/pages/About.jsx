// import React from 'react'
import Marquee from "react-fast-marquee";
import Header from '../components/Header'
import about from '../assets/About.jpg'
// Team images
import gowtham from "../assets/gowtham.jpg";
import yohitha from "../assets/yohitha.jpg";
import sree from "../assets/sree.jpg";
import Aravindh from "../assets/ARAVIND.jpg";
import Ragul from "../assets/Ragul.jpg";
import webd from "../assets/ARAVIND.jpg";
import kannadiyar from "../assets/kannadiyar.png";


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
        }
    ]

    const project = [
        {
            image: kannadiyar
        }
    ]

    return (
        <>
            <div className='text-textcolor-0 bg-background-0 w-full h-max'>
                <Header />
                <div className='font-primary'>

                    <h1 className='lg:mt-16 text-[25px] text-center'><q>Elevate Your Digital Future with Our IT Expertise</q></h1>
                    <div className="sm:flex sm:flex-col lg:flex lg:flex-row">
                        <img className="sm:ml-4 lg:ml-12 lg:mt-36 sm:w-72 sm:h-32 lg:w-fit lg:h-fit animate-fade-in-up" src={about} alt="image" />

                        <p className='sm:ml-12 lg:ml-12 lg:mt-40  lg:mr-2 animate-fade-in-up'><span className="text-button-0 text-[20px]"><q>We are Creative and Phenomenol</q></span><br />At B-Hub, we offer a range of professional services to meet various digital needs. We specialize in Web designing, Web development, and UI/UX design, combining creativity and technical skills to <br /> create visually appealing and highly functional solutions. Our expertise also extends to media works, where we focus on producing impactful visual content. Additionally, we actively collaborate on college projects, supporting the educational and professional growth of students. Whether you need a beautiful website, a seamless user experience, compelling media content, or assistance with academic projects, our dedicated team is committed to exceeding expectations and delivering excellence in every project.</p>
                    </div>

                    <div>
                        <Marquee speed={300} gradient={false} className="mt-[125px] text-[100px]">
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
                        <div>
                            <p className='text-center text-[30px] ml-12 mt-12 animate-fade-up'>Create Positive Goals in your life & <br /> reach them as happy as you can</p>
                        </div>
                        {/* <h1 className="border-b-2 text-textcolor-0"></h1> */}
                        <h1 className='text-center text-[70px] mt-4'>Our Team</h1>

                        <div className='sm:p-3 lg:space-x-6 lg:grid lg:grid-cols-4 lg:grid-flow-row lg:p-20 lg:animate-fade-in-up'>
                            {data.map((d, index) => (
                                <div key={index} className='border-8 border-textcolor-0 w-fit rounded-bl-2xl rounded-tr-2xl mt-8 ease-in-out delay-150 bg-blue-500 hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 transform transition-all'>
                                    <img className="p-2" src={d.img} alt={`Team member ${index + 1}`} />
                                    <h1 className="border-b-2 w-12"></h1>
                                    <p className="text-center mb-2">{d.heading}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team Mates Card Ends */}

                    <h1 className="border-b-2 text-textcolor-0"></h1>

                    {/* Projects section starts */}
                    <div>
                        <h1 className='text-center text-[70px]'>Projects</h1>
                        {(project.map((j) => (
                            <>
                                <div>
                                    <img className=" mt-12 ml-[700px]" src={j.image} />
                                </div>
                            </>
                        )))}

                    </div>
                    {/* Project Section Ends */}


                </div>
            </div >
        </>
    )
}

export default About