const services = [
  {
    icon: "🦷",
    title: "General Dentistry",
    text: "Complete dental care for a healthy and confident smile.",
  },
  {
    icon: "✨",
    title: "Teeth Whitening",
    text: "Brighten your smile with safe and effective whitening.",
  },
  {
    icon: "😁",
    title: "Orthodontics",
    text: "Modern solutions to straighten and improve your teeth.",
  },
  {
    icon: "🔩",
    title: "Dental Implants",
    text: "Strong, natural-looking replacements for missing teeth.",
  },
  {
    icon: "💎",
    title: "Cosmetic Dentistry",
    text: "Transform your smile with advanced cosmetic treatments.",
  },
  {
    icon: "🩺",
    title: "Root Canal",
    text: "Comfortable treatment to protect and save damaged teeth.",
  },
];

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">OUR SERVICES</span>

          <h2>
            Complete Dental <span>Care</span>
          </h2>

          <p>
            Everything you need for a healthy, beautiful and confident smile.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <button>Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
