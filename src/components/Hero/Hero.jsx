import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-text">
          <div className="hero-badge">
            <span>●</span>
            Trusted Dental Care
          </div>

          <h1>
            Your Smile,
            <br />
            Our <span>Passion.</span>
          </h1>

          <p>
            Modern dental care with advanced technology, experienced doctors,
            and a comfortable environment designed around you.
          </p>

          <div className="hero-buttons">
            <a href="#appointment" className="primary-btn">
              Book Appointment 
            </a>

            <a href="#services" className="secondary-btn">
              Explore Services
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>5K+</strong>
              <span>Happy Patients</span>
            </div>

            <div>
              <strong>15+</strong>
              <span>Specialists</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-circle"></div>

          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900"
            alt="Dentist"
          />

          <div className="hero-card card-one">
            <span>✓</span>

            <div>
              <strong>Expert Doctors</strong>
              <small>Professional Team</small>
            </div>
          </div>

          <div className="hero-card card-two">
            <strong>4.9</strong>
            <div>★★★★★</div>
            <small>Patient Rating</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
