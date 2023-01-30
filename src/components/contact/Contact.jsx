import "./Contact.scss";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xjmhrk8",
      "template_1o52zx9",
      formRef.current,
      "31a3tgVnKZPFrBiwF"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option__icon " />
            <h4>Email</h4>
            <h5>lumalabravo@gmail.com</h5>
            <a href="mailto:lumalabravo@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option__icon " />
            <h4>Messenger</h4>
            <h5>Brian Tutorials</h5>
            <a href="https://m.me/lumalabrianbravo" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon " />
            <h4>whatsApp Me</h4>
            <h5>Brian React JS</h5>
            <a
              href="https://api.whatsapp.com/send?phone+256704690012"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button className="btn btn-primary"> Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
