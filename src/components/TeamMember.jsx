import React from "react";

const TeamMember = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={member.img}
        alt="Team Member"
        className="w-32 h-32 mx-auto mb-4 rounded-full"
      />
      <h3 className="text-xl font-bold mb-2">{member.heading}</h3>
    </div>
  );
};

export default TeamMember;
