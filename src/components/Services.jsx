import webd from "../assets/webd.jpg";
import adminimg from "../assets/adminimg.png";
import mediaimg from "../assets/mediaimg.webp";
import contentimg from "../assets/contentimg.jpg";

const Services = () => {
    return (
        <>
            <div className='sm:bg-background-0 sm:w-full sm:h-max lg:bg-background-0 lg:w-full lg:h-max'>
                <div className="sm:font-primary sm:text-[25px] sm:text-textcolor-0 sm:-mt-80 sm:text-center lg:font-primary lg:text-[200px] lg:text-textcolor-0 lg:text-center lg:mt-2">Services Provided</div>

                <div>
                    <img className="lg:w-[800px] lg:rounded-3xl lg:ml-[650px] lg:h-[500px] lg:mt-12 lg:hover:shadow-inner lg:hover:bg-textcolor-0 lg:hover:translate-x-6" src={webd} alt="image" />
                    <p className="lg:font-primary lg:text-textcolor-0 lg:text-[30px] lg:-mt-72 lg:ml-4">We specialize in MERN and PERN stack development, offering professional front-end and back-end services. Our focus includes robust security measures and regular maintenance for enhanced performance and secure transactions.</p>
                </div>

                <div>
                    <img className="lg:w-[500px] lg:rounded-3xl lg:mt-48 lg:ml-16" src={adminimg} alt="image" />
                    <p className="lg:font-primary lg:text-textcolor-0 lg:text-right lg:mr-28 lg:-mt-44">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit facere laborum sint non molestiae dolore culpa aut est magnam, ea molestias odio amet, hic eos labore eaque reprehenderit optio.</p>
                </div>

                <div>
                    <img className="lg:w-[500px] lg:rounded-3xl lg:ml-[900px] lg:mt-48" src={mediaimg} alt="image" />
                    <p className="lg:font-primary lg:text-textcolor-0 lg:-mt-48 lg:ml-16">The main objective of media content creation is to design and create flyers, posters, and ID card designs that will be unique and creative.</p>
                </div>

                <div>
                    <img className="lg:w-[500px] lg:rounded-3xl lg:mt-48 lg:ml-16" src={contentimg} alt="image" />
                    <p className="lg:font-primary lg:text-textcolor-0 lg:ml-[750px] lg:-mt-44">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rerum vitae doloremque quam dignissimos sunt, minus reiciendis unde ut ipsam et ab in. Cum, in corrupti accusamus molestias soluta voluptates.</p>
                </div>
            </div>
        </>
    );
}

export default Services;
