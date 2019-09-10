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
      >
        This browser does not support PDFs. Please download the PDF to view it:{" "}
        <a href={resume}>Download PDF.</a>{" "}
      </object>
      <a
        data-aos="fade-up"
        data-aos-duration="1500"
        className="resume-btn"
        href={resume}
      >
        Download PDF.
      </a>
    </div>
  );
};

export default Resume;
