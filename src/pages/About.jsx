import React from 'react'
import Marquee from "react-fast-marquee";
import Header from '../components/Header'

const About = () => {
    return (
        <>
            <div className='text-textcolor-0 bg-background-0 w-full h-max'>
                <Header />
                <div className='font-primary'>
                    <h1 className='mt-12 text-[25px] text-center'><q>Elevate Your Digital Future with Our IT Expertise</q></h1>
                    <h1 className='text-[100px] text-center mt-36'>We Are Creative And Phenomenal</h1>
                    <p className=' text-center text-[20px] ml-2 mr-2'><q>At B-Hub, we offer a range of professional services to meet various digital needs. We specialize in Web designing, Web development, and UI/UX design, combining creativity and technical skills to <br /> create visually appealing and highly functional solutions. Our expertise also extends to media works, where we focus on producing impactful visual content. Additionally, we actively collaborate on college projects, supporting the educational and professional growth of students. Whether you need a beautiful website, a seamless user experience, compelling media content, or assistance with academic projects, our dedicated team is committed to exceeding expectations and delivering excellence in every project.</q></p>

                    <div>
                        <Marquee speed={300} gradient={false} className="mt-[81px] text-[300px]">
                            <div className="announcement">
                                <div className="announcement-text text1">
                                    <span>Our vision is to be the trusted partner for businesses,  We aim to simplify complexity, empower growth, and ensure our clients stay ahead in the ever-evolving digital landscape,</span>
                                    <span>delivering cutting-edge IT solutions that drive efficiency, innovation, and success.</span>
                                    <span>stay ahead in the ever-evolving digital landscape.</span>
                                </div>
                            </div>
                        </Marquee>
                    </div>

                    <div>
                        <p className='text-left'>Create Positive Goals in your life & <br /> reach them as happy as you can</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About