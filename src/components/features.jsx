import React from 'react';
import { features } from '../constants';
import "./scss/features.scss";

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Features that suit your needs</h2>
        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-header">
                <div className="feature-icon-container">
                  <img src={item.iconUrl} alt={item.name} className="feature-icon" />
                </div>
                <div className='feature-heading-container'>
                  <h3 className="feature-heading">{item.name}
                  </h3>
                  {item.comingSoon && <span className="coming-soon">coming soon</span>}
                </div>
              </div>
              <p className="feature-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features;