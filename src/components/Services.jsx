import webd from "../assets/webd.jpg";
import adminimg from "../assets/adminimg.png";
import mediaimg from "../assets/mediaimg.webp";
import contentimg from "../assets/contentimg.jpg";
import '../index.css'

const Services = () => {
  return (
    <div className="container">
      <div className="title lg:text-6xl lg:text-textcolor-0 lg:text-center lg:-mt-40 lg:text-[70px]">
        Services Provided
      </div>

      <div className="service-items-container">
        <ServiceItem
          imgSrc={webd}
          imgAlt="Web Development"
          description="We specialize in MERN and PERN stack development, offering professional  front-end and back-end services. Our focus includes robust security measures and regular maintenance for enhanced performance and secure transactions"
        />

        <ServiceItem
          imgSrc={adminimg}
          imgAlt="Admin Services"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit facere laborum sint non molestiae dolore culpa aut est magnam, ea molestias odio amet, hic eos labore eaque reprehenderit optio."
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
        />
      </div>
    </div>
  );
};

const ServiceItem = ({ imgSrc, imgAlt, description }) => {
  return (
    <div className="service-item animate-fade-in-up">
      <img className="service-item-image" src={imgSrc} alt={imgAlt} />
      <p className="service-item-description">{description}</p>
    </div>
  );
};

export default Services;
