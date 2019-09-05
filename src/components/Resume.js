import React from "react";
import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div className="resume wrapper" data-aos="fade-up">
      <iframe src={resume} scrolling="yes" title="resume" />
    </div>
  );
};

export default Resume;
