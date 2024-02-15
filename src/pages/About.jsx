// import React from 'react'

import about from '../assets/About.jpg'
import f1 from '../assets/f1.jpg'
import f2 from '../assets/f2.jpg'
// Team images
import gowtham from "../assets/gowtham.jpg";
import yohitha from "../assets/yohitha.jpg";
import sree from "../assets/sree.jpg";
import Aravindh from "../assets/ARAVIND.jpg";
import Ragul from "../assets/Ragul.jpg";
import webd from "../assets/ARAVIND.jpg";
import kannadiyar from "../assets/kannadiyar.png";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


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

    const features = [
        {
            fimg: f1,
            para1: "Web Development",
            para2: "Crafting Digital Excellence:Where Ideas Become Interactive Realities!"
        },
        {
            fimg: f2,
            para1: "Admin Panel Creation",
            para2: "Crafting Digital Excellence:Where Ideas Become Interactive Realities!"
        },
        {
            fimg: f1,
            para1: "Web Development",
            para2: "Crafting Digital Excellence:Where Ideas Become Interactive Realities!"
        },
        {
            fimg: f1,
            para1: "Web Development",
            para2: "Crafting Digital Excellence:Where Ideas Become Interactive Realities!"
        },
        {
            fimg: f1,
            para1: "Web Development",
            para2: "Crafting Digital Excellence:Where Ideas Become Interactive Realities!"
        },
        {
            fimg: f1,
            para1: "Web Development",
            para2: "Crafting Digital Excellence:Where Ideas Become Interactive Realities!"
        }
    ]

    return (
        <>
            <div className='bg-background-0 '>
                <div className='text-textcolor-0 bg-background-0 w-full h-max'>
                    <Navbar />
                    <div className='font-primary'>
                        <h1 className='mt-12 text-center lg:mt-16 lg:text-[25px] lg:text-center'><q>Elevate Your Digital Future with Our IT Expertise</q></h1>
                        <div className="sm:flex sm:flex-col lg:flex lg:flex-row ">
                            <img className="sm:ml-4 lg:ml-12 lg:mt-36 sm:w-72 sm:h-32 p-6  lg:w-fit lg:h-fit animate-fade-in-up lg:border-2 lg:hover:shadow-gold-0 lg:hover:cursor-pointer lg:text-gold-0 hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 transform transition-all" src={about} alt="image" />

                            <p className='sm: ml-12 lg:ml-12 lg:mt-44 translate-y-6 lg:mr-2 animate-fade-in-up'><span className="text-button-0 text-[20px] font-semibold"><q>We are Creative and Phenomenol</q></span><br />At B-Hub, we offer a range of professional services to meet various digital needs. We specialize in Web designing, Web development, and UI/UX design, combining creativity and technical skills to create visually appealing and highly functional solutions. Our expertise also extends to media works, where we focus on producing impactful visual content. Additionally, we actively collaborate on college projects, supporting the educational and professional growth of students. Whether you need a beautiful website, a seamless user experience, compelling media content, or assistance with academic projects, our dedicated team is committed to exceeding expectations and delivering excellence in every project.</p>
                        </div>
                        <h1 className="border-b-2 text-gold-0 font-semibold mt-40"></h1>

                        {/* Features start  */}
                        <div>
                            <div>
                                <h1 className="text-[20px] text-center lg:text-[30px] lg:text-center lg:mt-4">AWESOME FEATURES</h1>
                                <h1 className="border-b-2 text-gold-0 ml-[140px] w-24  lg:border-b-2 lg:w-32 lg:ml-[700px] lg:text-gold-0 lg:font-semibold"></h1>
                                <p className="text-center mt-3">"Beyond Expectations, Beyond Services: Crafting Excellence for You."</p>
                            </div>

                            <div className="space-x-4 lg:grid lg:grid-cols-3 lg:grid-flow-row ml-14 mr-12 mt-12">
                                {features.map((f) => (
                                    <>
                                        <div className="border-2 p-4 sm:flex sm:flex-col mt-4 shadow-2xl shadow-background-0 lg:border-none lg:p-0   lg:mt-7">
                                            <div className="flex flex-row">
                                                <img className="w-20 h-20 rounded-full" src={f.fimg} />
                                                <h1 className="mt-4 ml-4"><span className="text-gold-0 ">{f.para1}</span> <br /><q>{f.para2}</q></h1>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>

                        {/* Features end */}

                        <h1 className="border-b-2 text-gold-0 font-semibold mt-16"></h1>

                        {/* Team Mates Card */}
                        <div>
                            <div>
                                <h1 className='text-center text-[40px] mt-4'>Our Team</h1>
                                <h1 className="border-b-2 w-32 ml-[700px] text-gold-0 font-semibold"></h1>
                                <p className='text-center  ml-12 mt-3 animate-fade-up'>"Where Collaboration Creates Brilliance, Together We Achieve the Extraordinary!"</p>
                            </div>

                            <div className='sm:p-3 lg:space-x-6 lg:grid lg:grid-cols-4 lg:grid-flow-row lg:p-40 lg:animate-fade-in-up -mt-24'>
                                {data.map((d, index) => (
                                    <div key={index} className='border-8 border-textcolor-0 grayscale hover:grayscale-0  rounded-bl-2xl rounded-tr-2xl mt-10 ease-in-out delay-150 bg-blue-500 hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 transform transition-all'>
                                        <img className="p-2  transition duration-300" src={d.img} alt={`Team member ${index + 1}`} />
                                        <h1 className="border-b-2 w-12"></h1>
                                        <p className="text-center mb-2">{d.heading}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Team Mates Card Ends */}

                        <h1 className="border-b-2 text-gold-0 font-semibold mt-12"></h1>

                        {/* Projects section starts */}
                        {/* <div>
                        <h1 className='text-center text-[70px]'>Projects</h1>
                        {(project.map((j) => (
                            <>
                                <div>
                                    <img className=" mt-12 ml-[700px]" src={j.image} />
                                </div>
                            </>
                        )))}

                    </div> */}
                        {/* Project Section Ends */}


                    </div>
                </div >
                <Footer />
            </div>
        </>
    )
}

export default About