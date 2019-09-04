import React from "react";
import ReactContactForm from "react-mail-form";

const Contact = () => {
  return (
    <div className="contact wrapper" data-aos="fade-up">
      <h1>To: elizabethlemk@gmail.com</h1>
      <br />
      <ReactContactForm
        to="elizabethlemk@gmail.com"
        className="contact-form"
        titlePlaceholder="In regards to...."
        contentsPlaceholder="Hi Elizabeth, I wanted to reach out about...."
        buttonText="Submit"
      />
    </div>
  );
};

export default Contact;
