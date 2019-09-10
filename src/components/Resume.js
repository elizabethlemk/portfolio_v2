import React from "react";
import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div className="resume wrapper" data-aos="fade-up">
      <object type="application/pdf" data={resume} title="resume" />
    </div>
  );
};

export default Resume;
