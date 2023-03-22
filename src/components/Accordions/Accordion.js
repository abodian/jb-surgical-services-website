import React, { useState } from 'react';
import OurServicesCard from '../Cards/OurServicesCard.js'


const Accordion = ({ title, content}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className='accordion-title-text'>{title}</div>
        <div className='is-open'>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && 
        <div className="accordion-content">
          <div className='our-services-card'>
            {Object.entries(content).map(([key, value]) => (
              <OurServicesCard serviceTitle={key} serviceContent={value} />
            ))}
          </div>
        </div>
      }
    </div>
  );
};


export default Accordion;