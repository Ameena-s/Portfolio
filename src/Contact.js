// Contact.js
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>Contact Me</h2>
        <h4>Let's Work Together</h4>
        <p>
          I will help you with your next project. Contact me through the details
          below.
        </p>

        <ul className="contact-list">
          <li>
            <a href="#">Hydrabad,Telangana.</a>
          </li>
          <li>
            <a href="mailto:ameenabees26@gmail.com">ameenabees26@gmail.com</a>
          </li>
          <li>
            <a href="tel:+919321444725">+91 9321444725</a>
          </li>
        </ul>

        <a href="mailto:ameenabees26@gmail.com">
          <button className="btn" type="button">
            Let's Chat
          </button>
        </a>

        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/ameenabee-sayyad-026b76187"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://wa.me/9132144725"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
