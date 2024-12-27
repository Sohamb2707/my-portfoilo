import React from "react";

const Navbar = () => {

  return (
    <nav
      className="flex justify-between items-center px-6 py-4 shadow-md bg-[var(--bgColor)]"
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Left Side: Logo */}
      <div className="nav-left  w-[50vw]">
        <h1 className="text-2xl font-bold text-[var(--primaryText)] ml-6 tracking-wide">
          <span className="text-[var(--accent)] text-4xl">S</span>oham's
          <span className="ml-4 text-[var(--accent)] text-4xl">P</span>ortfolio
        </h1>
      </div>

      {/* Right Side: Links */}
      <div className="nav-right mr-4 w-[50vw]">
        <ul className="flex justify-evenly space-x-6 text-lg font-medium">
          <li>
            <a
              href="#home"
              className="text-[var(--primaryText)] hover:text-[var(--accent)] transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-[var(--primaryText)] hover:text-[var(--accent)] transition-all duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-[var(--primaryText)] hover:text-[var(--accent)] transition-all duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[var(--primaryText)] hover:text-[var(--accent)] transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

