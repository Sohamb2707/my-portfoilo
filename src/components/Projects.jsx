import React from "react";
import ProjectCard from "../components/ProjectCard";
import SwiftFix from "../assets/HomeService.jpg";
import Tomato from "../assets/food-website.png";
import CareMate from "../assets/caremateIM.jpg";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with animation duration
  }, []);

  return (
    <section
      id="projects"
      className="mt-10 flex flex-col items-center text-center px-4 sm:px-8"
      style={{
        backgroundColor: "var(--bgColor)",
        color: "var(--primaryText)",
      }}
      data-aos="fade-up"
    >
      <h1 className="text-4xl font-bold mb-8 tracking-wider" data-aos="zoom-in">
        Projects
      </h1>
      <p
        className="mb-12 text-lg"
        style={{ color: "var(--secondaryText)" }}
        data-aos="fade-up"
      >
        Explore my recent projects. Each showcases detailed descriptions, visuals, and links to their repositories or live demos.
      </p>
      <div
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
        data-aos="fade-up"
      >
        <ProjectCard
          src={SwiftFix}
          codeLink="https://github.com/Sohamb2707/SwiftFix.git"
          demoLink="https://drive.google.com/file/d/1MW1OLElwDA9hN_SbxBY0G1trUaLxqYuO/view?usp=drive_link"
          h3="SwiftFix"
          p="A home service app offering a wide range of services including plumbing, cleaning, and electrical repairs. Built using the MERN stack with a focus on user-friendly design and efficient service delivery."
          alt="SwiftFix project image"
        />
        <ProjectCard
          src={CareMate}
          codeLink="https://github.com/Sohamb2707/CareMate.git"
          demoLink="https://drive.google.com/file/d/1dyrio-j_9pI-iEVD-lXF2H2pyRGMkR2n/view?usp=drive_link"
          h3="CareMate"
          p="A mobile app that connects elderly individuals with caregivers. Features include real-time communication, personalized care plans, and a robust scheduling system."
          alt="CareMate project image"
        />
        <ProjectCard
          src={Tomato}
          codeLink="https://github.com/Sohamb2707/Tomatoo-Food-Delivery-.git"
          demoLink="https://drive.google.com/file/d/1Uwkg2yB0ouDa3pJczChl9ecrgXA5xMPg/view?usp=drive_link"
          h3="Tomato"
          p="A responsive food delivery website where key features include adding items to the menu, removing from the cart, dynamically calculating the total price in 
           realtime, and a user-friendly GUI"
          alt="Tomato project image"
        />
      </div>
    </section>
  );
};

export default Projects;
