import React from "react";

const ProjectImage = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={project.image} alt="Project" className="w-full h-auto" />
    </div>
  );
};

export default ProjectImage;
