import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="text-center py-6 border-t mt-10"
      style={{
        backgroundColor: "var(--bgColor)",
        borderColor: "var(--border)",
        color: "var(--secondaryText)",
      }}
    >
      <p className="text-base font-normal">
        &copy; {new Date().getFullYear()} Soham Babshetye. <br />
        All rights reserved.
      </p>
      <p className="text-sm font-normal mt-2">
        Made with ❤️ using React & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;
