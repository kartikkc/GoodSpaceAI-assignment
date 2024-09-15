import React from 'react';
import "./scss/integrations.scss";
import { integrations } from "../constants";
import { integrationsSVG } from '../assets';

const Integrations = () => {
  return (
    <div className='integration-bg'>
      <section className="integration-section">
        <h2 className='integration-heading'>Integrations</h2>
        <img src={integrationsSVG} alt="Integration Vector" className='integration-image' />
        <div className="integration-cards">
          {
            integrations.map((item, index) => (
              <div 
                className={`integration-card ${item.className}`} 
                key={index}
              >
                <div className='integration-card-header'>
                  <img src={item.iconUrl} alt={item.title} className='integration-icon' />
                  <h3 className='integration-card-title'>{item.title}</h3>
                </div>
                <p className='integration-text'>{item.text1}</p>
                <p className='integration-text'>{item.text2}</p>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Integrations;
