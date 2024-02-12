import React from "react";

const Feature = ({ feature }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img
        src={feature.fimg}
        alt="Feature"
        className="w-16 h-16 mx-auto mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{feature.para1}</h3>
      <p>{feature.para2}</p>
    </div>
  );
};

export default Feature;
