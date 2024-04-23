import React from "react";
import Header from "../header";

const About = () => {
  return (
    <div className="loginbg p-4 h-[100vh]">
      <Header />
      <p className="text-center p-2 mx-10 bg-slate-300 text-[#db2d2d] font-bold">About Me</p>
      <section className="m-2 text-justify">
        <p>
          I am a MERN stack developer,am ability to collaborate with cross-functional teams,
          communicate effectively, and adapt to evolving technologies positions
          as a valuable asset in the ever-changing landscape of web
          development.My passion for learning and staying updated on the
          latest industry trends keeps forefront of innovation,
          enabling to create cutting-edge solutions for a diverse range of
          projects. In essence,am a versatile and skilled professional,
          adept at bringing web applications to life through your expertise in
          the MERN stack.My commitment to excellence and your contribution to
          the development community make you a key player in shaping the digital
          experiences of today and tomorrow.
        </p>
      </section>
    </div>
  );
};

export default About;
