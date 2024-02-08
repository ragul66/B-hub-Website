import webd from "../assets/webd.jpg";
import adminimg from "../assets/adminimg.png";
import mediaimg from "../assets/mediaimg.webp";
import contentimg from "../assets/contentimg.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <div className="title lg:text-[200px] lg:text-textcolor-0 lg:text-center">
        Services Provided
      </div>

      <ServiceItem
        imgSrc={webd}
        imgAlt="Web Development"
        description="We specialize in MERN and PERN stack development, offering professional front-end and back-end services. Our focus includes robust security measures and regular maintenance for enhanced performance and secure transactions."
      />

      <ServiceItem
        imgSrc={adminimg}
        imgAlt="Admin Services"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit facere laborum sint non molestiae dolore culpa aut est magnam, ea molestias odio amet, hic eos labore eaque reprehenderit optio."
        alignRight
      />

      <ServiceItem
        imgSrc={mediaimg}
        imgAlt="Media Content Creation"
        description="The main objective of media content creation is to design and create flyers, posters, and ID card designs that will be unique and creative."
      />

      <ServiceItem
        imgSrc={contentimg}
        imgAlt="Content Creation"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rerum vitae doloremque quam dignissimos sunt, minus reiciendis unde ut ipsam et ab in. Cum, in corrupti accusamus molestias soluta voluptates."
        alignRight
      />
    </div>
  );
};

const ServiceItem = (imgSrc, imgAlt, description, alignRight) => {
  const imageClass = `lg:w-[500px] lg:rounded-3xl lg:mt-48 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 transform transition-all hover:translate-x-4 ${alignRight ? "lg:ml-[900px]" : "lg:ml-16"
    }`;

  const textClass = `lg:font-primary lg:text-textcolor-0 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300    ${alignRight ? "lg:text-right lg:mr-28" : "lg:ml-[700px]"
    } lg:-mt-44`;

  return (
    <div className="service-item animate-fade-in-up">
      <img className={imageClass} src={imgSrc} alt={imgAlt} />
      <p className={textClass}>{description}</p>
    </div>
  );
};

export default Services;
