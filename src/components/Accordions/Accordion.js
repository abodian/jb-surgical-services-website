import React, { useState } from 'react';
import OurServicesCard from '../Cards/OurServicesCard.js'
import Radium, {StyleRoot} from 'radium';
import { fadeIn } from 'react-animations'


const Accordion = ({ title, content}) => {
  const [isActive, setIsActive] = useState(false);

  const styles = {
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }

  return (
    <StyleRoot>
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className='accordion-title-text'>{title}</div>
        <div className='is-open'>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && 
        <div className="accordion-content" style={{...styles.fadeIn}}>
          <div className='our-services-card'>
            {Object.entries(content).map(([key, value]) => (
              <OurServicesCard serviceTitle={key} serviceContent={value} />
            ))}
          </div>
        </div>
      }
    </div>
    </StyleRoot>
  );
};


export default Accordion;