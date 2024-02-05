import webd from "../assets/webd.jpg"
import adminimg from "../assets/adminimg.png"
import mediaimg from "../assets/mediaimg.webp"
import contentimg from "../assets/contentimg.jpg"

const Services = () => {

    return (

        <>
            <div className='sm: bg-background-0 sm: w-full sm: h-max  lg:bg-background-0 lg:w-full lg:h-max '>
                <div className=" sm: font-primary sm: text-[25px] sm: text-textcolor-0 sm: -mt-80 sm: text-center lg:font-primary lg:text-[50px] lg:text-textcolor-0 lg:-mt-48 lg:text-center" >Services</div>

                <div>
                    {/* <h1 className="lg:font-primary lg:text-textcolor-0 lg:text-[25px]">Web Development</h1> */}
                    <img className="lg:w-[500px] lg:rounded-3xl lg:ml-[900px] lg:mt-12 lg:hover:shadow-inner lg:hover:bg-textcolor-0" src={webd} alt="image" />
                    <p className="lg:font-primary lg:text-textcolor-0 lg:-mt-44 lg:ml-8">Web development services encompass a range of activities involved in creating and maintaining websites and web applications which includes services <br /> like front-end development using React and back-end development using Node js we do both MERN and PERN stack development<br /> projects with Implementing security measures to protect sensitive data, ensuring secure transactions and user interactions also Regularly maintaining <br /> and updating websites to address security issues, improve performance, and fix bugs.</p>
                </div>

                <div>
                    {/* <h1 className="lg:font-primary lg:text-textcolor-0 lg:text-[25px]">Admin Panel</h1> */}
                    <img className="lg:w-[500px] lg:rounded-3xl lg:mt-48 lg:ml-16" src={adminimg} alt="image" />
                    <p className="lg:font-primary lg:text-textcolor-0 lg:text-right lg:mr-28 lg:-mt-44">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit facere laborum sint non molestiae<br /> dolore culpa aut est magnam, ea molestias odio amet, hic eos labore eaque reprehenderit optio.</p>
                </div>

                <div>
                    {/* <h1 className="lg:font-primary lg:text-textcolor-0 lg:text-[25px]">Media Creation</h1> */}
                    <img className="lg:w-[500px] lg:rounded-3xl lg:ml-[900px] lg:mt-48" src={mediaimg} alt="image" />
                    <p className="lg:font-primary lg:text-textcolor-0 lg:-mt-48 lg:ml-16">The main objective of media content creation is to design and create flyers, posters, and ID card<br /> designs that will be unique and creative.</p>
                </div>

                <div>
                    <img className="lg:w-[500px] lg:rounded-3xl lg:mt-48 lg:ml-16" src={contentimg} alt="image" />
                    <p className="lg:font-primary lg:text-textcolor-0 lg:ml-[750px] lg:-mt-44">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rerum vitae doloremque quam dignissimos sunt,<br /> minus reiciendis unde ut ipsam et ab in. Cum, in corrupti accusamus molestias soluta voluptates.</p>
                    {/* <p className="lg:font-primary lg:text-textcolor-0 lg:ml-[750px] lg:-mt-48">Carousel</p> */}
                </div>

            </div>
        </>
    )
}

export default Services