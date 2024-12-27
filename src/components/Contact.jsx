import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-10 flex flex-col items-center text-center px-4"
      style={{ backgroundColor: "var(--bgColor)", color: "var(--primaryText)" }}
    >
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <form
        className="flex flex-col gap-6 items-center w-full max-w-xl"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you for reaching out! We will get back to you soon.");
        }}
      >
        <div className="w-full">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            className="w-full h-12 px-4 text-base rounded-xl border"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bgColor)",
              color: "var(--primaryText)",
            }}
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
            className="w-full h-12 px-4 text-base rounded-xl border"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bgColor)",
              color: "var(--primaryText)",
            }}
          />
        </div>
        <div className="w-full">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            required
            className="w-full h-40 p-4 text-base rounded-xl border resize-none"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bgColor)",
              color: "var(--primaryText)",
            }}
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className="w-32 h-12 font-bold text-lg rounded-xl bg-[var(--accent)] text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 cursor-pointer"
        />
      </form>
    </section>
  );
};

export default Contact;
