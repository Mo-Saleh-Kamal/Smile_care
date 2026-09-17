function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900"
            alt="SmileCare Clinic"
          />

          <div className="experience">
            <strong>10+</strong>
            <span>Years of Excellence</span>
          </div>
        </div>

        <div className="about-text">
          <span className="section-label">ABOUT SMILECARE</span>

          <h2>
            We care about your
            <span> smile.</span>
          </h2>

          <p>
            At SmileCare, we believe every patient deserves exceptional dental
            treatment in a friendly and comfortable environment.
          </p>

          <p>
            Our experienced team combines modern technology with personalized
            care to give you a healthier and brighter smile.
          </p>

          <div className="check-list">
            <div>✓ Advanced Dental Technology</div>
            <div>✓ Experienced Specialists</div>
            <div>✓ Comfortable Environment</div>
            <div>✓ Personalized Treatment Plans</div>
          </div>

          <button className="primary-btn">Learn More →</button>
        </div>
      </div>
    </section>
  );
}

export default About;
