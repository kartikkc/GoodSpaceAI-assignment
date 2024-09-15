import React from 'react';
import { testimonials } from '../constants';
import "./scss/reviews.scss";

const Reviews = () => {
  return (
    <section className="customers-section">
      <div className="container">
        <h2 className="title">Our customers love us</h2>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className={`testimonial-item ${item.className}`} key={index}>
              <p className="feedback">
                {item.text}
              </p>
              <div className="customer-info">
                <img src={item.imageUrl} alt={item.name} className="customer-image" />
                <div className="customer-details">
                  <h4 className="customer-name">{item.name}</h4>
                  <h4 className="customer-position">{item.designation}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;