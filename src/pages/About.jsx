import React from "react";
import Navbar from "../components/Navbar";
import TeamMember from "../components/TeamMember";
import ProjectImage from "../components/ProjectImage";
import Feature from "../components/Feature";
import aboutImage from "../assets/About.jpg";
import f1Image from "../assets/f1.jpg";
import f2Image from "../assets/f2.jpg";
import gowthamImage from "../assets/gowtham.jpg";
import yohithaImage from "../assets/yohitha.jpg";
import sreeImage from "../assets/sree.jpg";
import AravindhImage from "../assets/ARAVIND.jpg";
import RagulImage from "../assets/Ragul.jpg";
import webdImage from "../assets/ARAVIND.jpg";
import kannadiyarImage from "../assets/kannadiyar.png";

const About = () => {
  // Team members data
  const teamMembers = [
    { img: gowthamImage, heading: "Gowtham Raj.S" },
    { img: yohithaImage, heading: "Yohitha.S" },
    { img: sreeImage, heading: "Sree Aranganathan.D" },
    { img: AravindhImage, heading: "Aravindhan.U.D" },
    { img: RagulImage, heading: "Ragul vasanth.S.M" },
    { img: webdImage, heading: "Ragul vasanth" },
    { img: webdImage, heading: "Ragul vasanth" },
    { img: webdImage, heading: "Ragul vasanth" },
  ];

  // Project data
  const projects = [{ image: kannadiyarImage }];

  // Features data
  const features = [
    {
      fimg: f1Image,
      para1: "Web Development",
      para2:
        "Crafting Digital Excellence:Where Ideas Become Interactive Realities!",
    },
    {
      fimg: f2Image,
      para1: "Admin Panel Creation",
      para2:
        "Crafting Digital Excellence:Where Ideas Become Interactive Realities!",
    },
    // Add more features as needed
  ];

  return (
    <div className="text-textcolor-0 bg-background-0 w-full min-h-screen">
      <Navbar />
      <div className="container mx-auto py-12">
        <section className="text-center mb-12">
          <img
            src={aboutImage}
            alt="About Us"
            className="mx-auto max-w-xs sm:max-w-none"
          />
          <h2 className="text-3xl font-bold mt-6">
            Elevate Your Digital Future with Our IT Expertise
          </h2>
          <p className="mt-4">
            "At B-Hub, we offer a range of professional services to meet various
            digital needs..."
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Awesome Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Feature key={index} feature={feature} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectImage key={index} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
