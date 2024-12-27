import React from "react";
import sohamImg from "../assets/soham-pic.png";
import leetcode from "../assets/leetcode.png";
import resume from "../assets/soham-resume.pdf";

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen flex flex-col lg:flex-row transition-all duration-500 bg-[var(--bgColor)]"
    >
      {/* Right Part */}
      <div className="right-part lg:w-1/2 w-full flex flex-col items-center justify-center transition-all duration-500 p-6">
        <img
          src={sohamImg}
          alt="Soham"
          className="rounded-full w-96 h-96 object-cover shadow-lg transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Left Part */}
      <div className="left-part lg:w-1/2 w-full flex flex-col justify-center items-start p-8">
        <h1
          className="text-4xl font-bold mb-2 tracking-wider animate-fade-in-up text-[var(--primaryText)]"
        >
          Soham <br /> Babshetye
        </h1>
        <h2
          className="text-xl font-medium mb-6 tracking-wide animate-fade-in text-[var(--secondaryText)]"
        >
          Frontend Developer
        </h2>
        <div className="flex items-center space-x-6 mb-6">
          <a
            href="https://github.com/Sohamb2707"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[var(--primaryText)] hover:text-[var(--accent)] transform hover:scale-110 transition-all duration-300"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/soham-babshetye-b2b8ab271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[var(--primaryText)] hover:text-[var(--accent)] transform hover:scale-110 transition-all duration-300"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://leetcode.com/u/_soham_27_/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-all duration-300"
          >
            <img
              src={leetcode}
              alt="LeetCode"
              className="w-6 h-6 hover:opacity-80 transition-opacity duration-300"
            />
          </a>
        </div>
        <p
          className="leading-7 mb-6 animate-fade-in-up text-[var(--secondaryText)]"
        >
          A third-year IT student with a passion for problem-solving and
          developing innovative solutions. I have a strong foundation in
          creating dynamic and responsive web applications. Eager to bring my
          skills in web development and continuous learning to contribute to
          impactful projects at your company.
        </p>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-normal px-6 py-2 tracking-wide rounded-lg shadow-lg bg-[var(--accent)] text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
