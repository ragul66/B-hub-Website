// import webd from "../assets/webd.jpg";
// import adminimg from "../assets/adminimg.png";
// import mediaimg from "../assets/mediaimg.webp";
// import contentimg from "../assets/contentimg.jpg";
// import Marquee from "react-fast-marquee";
// import '../index.css'

// const Services = () => {



//   return (
//     <div className="conatiner service lg:text-textcolor-0 font-primary">

//       <Marquee speed={300} className="-mt-48 text-[300px]">
//         <h1>Portfolio</h1>
//       </Marquee>

//       <div className=" title lg:text-6xl  lg:text-center lg:mt-36 lg:text-[70px] lg:mb-48">
//         Services Provided
//       </div>

//       <div className="service-items-container p-4 space-x-0">
//         <ServiceItem
//           imgSrc={webd}
//           imgAlt="Web Development"
//           description="We specialize in MERN and PERN stack development, offering professional  front-end and back-end services. Our focus includes robust security measures and regular maintenance for enhanced performance and secure transactions"
//         />

//         <ServiceItem
//           imgSrc={adminimg}
//           imgAlt="Admin Services"
//           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit facere laborum sint non molestiae dolore culpa aut est magnam, ea molestias odio amet, hic eos labore eaque reprehenderit optio."
//         />

//         <ServiceItem
//           imgSrc={mediaimg}
//           imgAlt="Media Content Creation"
//           description="The main objective of media content creation is to design and create flyers, posters, and ID card designs that will be unique and creative."
//         />

//         <ServiceItem
//           imgSrc={contentimg}
//           imgAlt="Content Creation"
//           description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rerum vitae doloremque quam dignissimos sunt, minus reiciendis unde ut ipsam et ab in. Cum, in corrupti accusamus molestias soluta voluptates."
//         />

//         <ServiceItem
//           imgSrc={contentimg}
//           imgAlt="Content Creation"
//           description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rerum vitae doloremque quam dignissimos sunt, minus reiciendis unde ut ipsam et ab in. Cum, in corrupti accusamus molestias soluta voluptates."
//         />

//         <ServiceItem
//           imgSrc={contentimg}
//           imgAlt="Content Creation"
//           description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rerum vitae doloremque quam dignissimos sunt, minus reiciendis unde ut ipsam et ab in. Cum, in corrupti accusamus molestias soluta voluptates."
//         />
//       </div>



//     </div>
//   );
// };


// const ServiceItem = ({ imgSrc, imgAlt, description }) => {
//   return (
//     <div className="p-6 shadow-xl shadow-gold-0 service-item animate-fade-in-up">
//       <img className="service-item-image hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 transform transition-all" src={imgSrc} alt={imgAlt} />
//       <p className="service-item-description">{description}</p>
//     </div>
//   );
// };


// export default Services;

import webd from "../assets/webd.jpg";
import adminimg from "../assets/adminimg.png";
import mediaimg from "../assets/mediaimg.webp";
import contentimg from "../assets/contentimg.jpg";
import Marquee from "react-fast-marquee";


const Services = () => {
  return (
    <div className="container service lg:text-textcolor-0 font-primary">
      <Marquee speed={300} className="-mt-48 text-[300px]">
        <h1>Portfolio</h1>
      </Marquee>

      <div className="title lg:text-6xl lg:text-center lg:mt-36 lg:text-[70px] lg:mb-48">
        Services Provided
      </div>

      <div className="service-items-container  p-4 space-x-40  flex flex-wrap">
        <ServiceItem
          imgSrc={webd}
          imgAlt="Web Development"
          description="We specialize in MERN and PERN stack development, offering professional front-end and back-end services. Our focus includes robust security measures and regular maintenance for enhanced performance and secure transactions"
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

        <ServiceItem
          imgSrc={contentimg}
          imgAlt="Content Creation"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rerum vitae doloremque quam dignissimos sunt, minus reiciendis unde ut ipsam et ab in. Cum, in corrupti accusamus molestias soluta voluptates."
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
    <div className="p-6 border-2 border-textcolor-0 shadow-2xl shadow-background-0 service-item animate-fade-in-up mt-12 w-1/2 lg:w-1/3">
      <img className="service-item-image hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 transform transition-all" src={imgSrc} alt={imgAlt} />
      <p className="service-item-description">{description}</p>
    </div>
  );
};

export default Services;

// import webd from "../assets/webd.jpg";
// import adminimg from "../assets/adminimg.png";
// import mediaimg from "../assets/mediaimg.webp";
// import contentimg from "../assets/contentimg.jpg";
// import Marquee from "react-fast-marquee";
// import '../index.css'

// const Services = () => {
//   const serviceItems = [
//     {
//       imgSrc: webd,
//       imgAlt: "Web Development",
//       description: "We specialize in MERN and PERN stack development, offering professional front-end and back-end services. Our focus includes robust security measures and regular maintenance for enhanced performance and secure transactions"
//     },
//     {
//       imgSrc: adminimg,
//       imgAlt: "Admin Services",
//       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit facere laborum sint non molestiae dolore culpa aut est magnam, ea molestias odio amet, hic eos labore eaque reprehenderit optio."
//     },
//     {
//       imgSrc: mediaimg,
//       imgAlt: "Media Content Creation",
//       description: "The main objective of media content creation is to design and create flyers, posters, and ID card designs that will be unique and creative."
//     },
//     {
//       imgSrc: contentimg,
//       imgAlt: "Content Creation",
//       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rerum vitae doloremque quam dignissimos sunt, minus reiciendis unde ut ipsam et ab in. Cum, in corrupti accusamus molestias soluta voluptates."
//     },
//     {
//       imgSrc: contentimg,
//       imgAlt: "Content Creation",
//       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rerum vitae doloremque quam dignissimos sunt, minus reiciendis unde ut ipsam et ab in. Cum, in corrupti accusamus molestias soluta voluptates."
//     },
//     {
//       imgSrc: contentimg,
//       imgAlt: "Content Creation",
//       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rerum vitae doloremque quam dignissimos sunt, minus reiciendis unde ut ipsam et ab in. Cum, in corrupti accusamus molestias soluta voluptates."
//     }
//   ];

//   return (
//     <div className="container service lg:text-textcolor-0 font-primary">
//       <Marquee speed={300} className="-mt-48 text-[300px]">
//         <h1>Portfolio</h1>
//       </Marquee>

//       <div className="title lg:text-6xl lg:text-center lg:mt-36 lg:text-[70px] lg:mb-48">
//         Services Provided
//       </div>

//       <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 gap-4">
//         {serviceItems.map((item, index) => (
//           <ServiceItem key={index} {...item} index={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const ServiceItem = ({ imgSrc, imgAlt, description, index }) => {
//   const isLeft = index % 2 === 0;

//   return (
//     <div className={`p-6 shadow-xl shadow-gold-0 service-item animate-fade-in-up ${isLeft ? 'lg:col-span-1' : 'lg:col-span-1 lg:col-start-2'}`}>
//       <img className="service-item-image hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 transform transition-all" src={imgSrc} alt={imgAlt} />
//       <p className="service-item-description">{description}</p>
//     </div>
//   );
// };

// export default Services;


