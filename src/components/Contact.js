import React from "react";
/* icons */
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="section-title">Get in touch!</h1>
      <div className="findme">
        <p>
          I am currenty available and would love to hear about any opportunities
          and projects you have in mind!
        </p>
        <h3>FIND ME ON</h3>
        <div className="findme-icons">
          <a
            href="https://github.com/romainnm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/romain-n-a4535128"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <hr className="line-separator" />
        <p>or Email Me</p>
      </div>
      <div className="btn-contact">
        <a
          href="mailto:contact@romain-nim.com"
          className="btn"
        >
          Say Hello! <MdEmail />
        </a>
      </div>
    </section>
  );
};

export default Contact;
