const reviews = [
  {
    name: "Mohamed A.",
    text: "Amazing experience from start to finish. The team is professional, friendly and really cares about patients.",
  },
  {
    name: "Omar M.",
    text: "The clinic is beautiful and modern. The doctor explained everything clearly and made me feel comfortable.",
  },
  {
    name: "Salma H.",
    text: "Very professional service. I am extremely happy with my treatment and the results.",
  },
];

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">PATIENT REVIEWS</span>

          <h2>
            What Our Patients <span>Say</span>
          </h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div className="review" key={review.name}>
              <div className="stars">★★★★★</div>

              <p>"{review.text}"</p>

              <strong>{review.name}</strong>

              <small>Verified Patient</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
