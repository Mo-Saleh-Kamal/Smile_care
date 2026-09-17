function Appointment() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Appointment request sent successfully!");

    e.target.reset();
  };

  return (
    <section className="section appointment" id="appointment">
      <div className="container appointment-container">
        <div className="appointment-info">
          <span className="section-label">APPOINTMENT</span>

          <h2>
            Ready for a<span> better smile?</span>
          </h2>

          <p>
            Schedule your visit today and take the first step toward a healthier
            smile.
          </p>

          <div className="appointment-details">
            <div>
              <i class="fa-solid fa-phone"></i>

              <span>+20 155 076 7324</span>
            </div>

            <div>
              <i class="fa-sharp fa-solid fa-location-dot"></i>
              <span>Cairo, Egypt</span>
            </div>

            <div>
              <i class="fa-solid fa-clock"></i>
              <span>Sat - Thu: 10AM - 10PM</span>
            </div>
          </div>
        </div>

        <form className="appointment-form" onSubmit={handleSubmit}>
          <h3>Book Your Appointment</h3>

          <div className="form-row">
            <input type="text" placeholder="Your Name" required />

            <input type="tel" placeholder="Phone Number" required />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email Address" />

            <select defaultValue="" required>
              <option value="" disabled>
                Select Service
              </option>

              <option>General Dentistry</option>

              <option>Teeth Whitening</option>

              <option>Orthodontics</option>

              <option>Dental Implants</option>

              <option>Cosmetic Dentistry</option>
            </select>
          </div>

          <input type="date" required />

          <textarea
            rows="4"
            placeholder="Tell us anything we should know..."
          ></textarea>

          <button className="primary-btn" type="submit">
            Confirm Appointment →
          </button>
        </form>
      </div>
    </section>
  );
}

export default Appointment;
