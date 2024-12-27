const ProjectCard = ({ src, codeLink, demoLink, h3, p, alt }) => {
  return (
    <div
      className="group block max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{
        backgroundColor: "var(--bgColor)",
        border: `1px solid var(--border)`,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-90"
      />
      <div className="p-4 flex flex-col justify-between h-56"> {/* Adjust height */}
        <div>
          <h3
            className="text-2xl font-semibold mb-2"
            style={{ color: "var(--primaryText)" }}
          >
            {h3}
          </h3>
          <p
            className="text-sm text-justify"
            style={{ color: "var(--secondaryText)" }}
          >
            {p}
          </p>
        </div>
        {/* Code and Demo Buttons */}
        <div className="mt-4 flex justify-between items-center">
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
          >
            Code
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
