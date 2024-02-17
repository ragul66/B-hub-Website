import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import webd from "../assets/webd.jpg";

const Services = () => {
  return (
    <div className="lg:text-textcolor-0 font-primary">
      <div className="title lg:text-6xl lg:text-center lg:mt-36 lg:text-[78px] lg:mb-48">
        Services Provided
      </div>

      <div className="p-4">
        <ServiceItem
          imgSrc={webd}
          imgAlt="Web Development"
          description="Web Development"
        />

        <ServiceItem2
          imgSrc={webd}
          imgAlt="Admin Services"
          description="Admin Services"
        />

        <ServiceItem
          imgSrc={webd}
          imgAlt="Media Content Creation"
          description="Media Content Creation"
        />

        <ServiceItem2
          imgSrc={webd}
          imgAlt="Content Creation"
          description="Content Creation"
        />
      </div>
    </div>
  );
};

const ServiceItem = ({ imgSrc, imgAlt, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="p-4 bg-white rounded-lg flex flex-row justify-center items-center m-4"
    >
      <motion.img
        className="w-1/2 rounded-lg mb-4 flex flex-col -mr-[30px]"
        src={imgSrc}
        alt={imgAlt}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      />
      <p className="text-gray-700 flex flex-col text-5xl -ml-[30px]">
        {description}
      </p>
    </div>
  );
};

const ServiceItem2 = ({ imgSrc, imgAlt, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="p-4 bg-white  rounded-lg  flex flex-row justify-center items-center m-4"
    >
      <p className="text-gray-700 flex flex-col text-5xl z-30  -mr-[30px]">
        {description}
      </p>
      <motion.img
        className="w-1/2 rounded-lg mb-4 flex flex-col z-20 -ml-[30px] invert"
        src={imgSrc}
        alt={imgAlt}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default Services;