function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-container">
        <div>
          <span className="section-label">CONTACT US</span>

          <h2>
            Let's talk about your
            <span> smile.</span>
          </h2>

          <p>Have a question? Our team is ready to help you.</p>
        </div>

        <div className="contact-cards">
          <div>
            <span>
              {" "}
              <i class="fa-solid fa-phone"></i>
            </span>

            <div>
              <small>Call Us</small>
              <strong>+20 155 076 7324</strong>
            </div>
          </div>

          <div>
            <span>
              <i class="fa-solid fa-envelope"></i>
            </span>

            <div>
              <small>Email</small>
              <strong>hello@smilecare.com</strong>
            </div>
          </div>

          <div>
            <span>
              {" "}
              <i class="fa-sharp fa-solid fa-location-dot"></i>
            </span>

            <div>
              <small>Location</small>
              <strong>Cairo, Egypt</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
