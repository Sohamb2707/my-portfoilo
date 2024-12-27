import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="mt-10 flex flex-col items-center text-center"
      style={{
        backgroundColor: "var(--bgColor)",
        color: "var(--primaryText)",
      }}
    >
      <h1 className="text-4xl font-bold mb-8">Skills</h1>

      {/* Skill Section 1 */}
      <div className="flex flex-wrap gap-8 justify-center mb-8">
        <p
          className="text-lg font-medium"
          style={{ color: "var(--accent)" }}
        >
          HTML
        </p>
        <p
          className="text-lg font-medium"
          style={{ color: "var(--accent)" }}
        >
          CSS
        </p>
        <p
          className="text-lg font-medium"
          style={{ color: "var(--accent)" }}
        >
          JavaScript
        </p>
        <p
          className="text-lg font-medium"
          style={{ color: "var(--accent)" }}
        >
          React
        </p>
      </div>
      <hr
        className="w-40 border-t-2 my-6"
        style={{ borderColor: "var(--border)" }}
      />

      {/* Skill Section 2 */}
      <div className="flex flex-wrap gap-8 justify-center mb-8">
        <p
          className="text-lg font-medium"
          style={{ color: "var(--accent)" }}
        >
         Node
        </p>
        <p
          className="text-lg font-medium"
          style={{ color: "var(--accent)" }}
        >
          Tailwind
        </p>
        <p
          className="text-lg font-medium"
          style={{ color: "var(--accent)" }}
        >
          Bootstrap
        </p>
        <p
          className="text-lg font-medium"
          style={{ color: "var(--accent)" }}
        >
          Java
        </p>
      </div>
    </section>
  );
};

export default Skills;
