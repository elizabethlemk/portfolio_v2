import React from "react";
import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div className="wrapper" data-aos="fade-up">
      <iframe src={resume} title="resume" className="resume" />
    </div>
  );
};

export default Resume;
