
import "./Doctors.css";


const doctors = [
  {
    name: "Dr. Ahmed Hassan",
    job: "Dental Surgeon",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600",
  },
  {
    name: "Dr. Sarah Ali",
    job: "Orthodontist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600",
  },
  {
    name: "Dr. Omar Khaled",
    job: "Cosmetic Dentist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600",
  },
];

function Doctors() {
  return (
    <section className="section doctors" id="doctors">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">OUR SPECIALISTS</span>

          <h2>
            Meet Our <span>Doctors</span>
          </h2>

          <p>Experienced professionals dedicated to your dental health.</p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.name}>
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
              </div>

              <div className="doctor-info">
                <h3>{doctor.name}</h3>

                <p>{doctor.job}</p>

                <div className="doctor-social">
                  <span className="link">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </span>
                  <span className="face">
                    <i class="fa-brands fa-facebook-f"></i>
                  </span>
                  <span className="twet">
                    <i class="fa-brands fa-x-twitter"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
