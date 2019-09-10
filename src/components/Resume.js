import React from "react";
import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div className="resume wrapper" data-aos="fade-up">
      <object
        type="application/pdf"
        data={resume}
        title="resume"
        data-aos="fade-down"
        data-aos-duration="1500"
      />
    </div>
  );
};

export default Resume;
