import React from "react";
import ReactContactForm from "react-mail-form";

const Contact = () => {
  return (
    <div className="contact wrapper" data-aos="fade-up">
      <h2 data-aos="fade-down" data-aos-duration="1500">
        To: elizabethlemk@gmail.com
      </h2>
      <br />
      <div data-aos="fade-up" data-aos-duration="1500">
        <ReactContactForm
          to="elizabethlemk@gmail.com"
          className="contact-form"
          titlePlaceholder="In regards to...."
          contentsPlaceholder="Hi Elizabeth, I wanted to reach out about...."
          buttonText="Submit"
        />
      </div>
    </div>
  );
};

export default Contact;
