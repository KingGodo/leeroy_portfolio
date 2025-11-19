// sections/CallToAction.tsx

"use client";

export const CallToAction = () => {
  return (
    <section
      id="cta"
      className="w-full py-20 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Work Together?
        </h2>

        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Whether you’re looking to build a new project, improve an existing system,
          or create something innovative. I am here to help bring your ideas to life.
        </p>

        <a
          href="#contact"
          className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};
