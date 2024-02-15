import webd from "../assets/webd.jpg";

const Services = () => {
  return (
    <div className="lg:text-textcolor-0 font-primary">
      <div className="title lg:text-6xl lg:text-center lg:mt-36 lg:text-[78px] lg:mb-48">
        Services Provided
      </div>

      <div className="p-4 gap-8">
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
  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-row justify-center items-center">
      <img
        className="w-1/2 rounded-lg mb-4 flex flex-col -mr-[30px]"
        src={imgSrc}
        alt={imgAlt}
      />
      <p className="text-gray-700 flex flex-col text-5xl">{description}</p>
    </div>
  );
};

const ServiceItem2 = ({ imgSrc, imgAlt, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-row justify-center items-center">
      <p className="text-gray-700 flex flex-col text-5xl z-30">{description}</p>
      <img
        className="w-1/2 rounded-lg mb-4 flex flex-col z-20 -ml-[30px] invert"
        src={imgSrc}
        alt={imgAlt}
      />
    </div>
  );
};

export default Services;
