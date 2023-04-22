import React from 'react';
import Accordion from '../components/Accordions/Accordion';
require('./OurServices.css')


const OurServices = () => {
  const accordionData = [
    {
      title: 'SOFT-TISSUE SURGERY',
      content: {'Cutaneous': 'Cutaneous surgery refers to surgical procedures performed on the skin and subcutaneous tissue', 
      'Ocular Surgery': "Ocular surgery involves surgeries on the eyes and their adnexa", 
      'Airway Surgery': "Airway surgery is a set of surgical procedures that deal with the respiratory tract", 
      'Hernia': "Hernia surgery involves repairing a weakened or torn abdominal wall", 
      'Urinary': 'Urinary surgery refers to surgical procedures on the urinary tract, including the kidneys, ureters, bladder, and urethra'
    },
      link: '/soft-tissue-surgery'
    },
    {
      title: 'ORTHOPAEDICS',
      content: {
        'Diagnostics': 'Techniques that facilitate musculoskeletal disease diagnosis, enabling a prognosis and treatment plan.',
        'Regenerative Medicine': "A field of medicine that focuses on using the body's own regenerative processes to heal injured tissues, often through the use of stem cells or growth factors.",
        'Fracture Repair': 'Surgical procedures used to repair broken bones, which can involve the use of pins, plates, screws, or other devices to hold the bone in place while it heals.',
        'Cranial Curcicate Ligament Disease': 'A common orthopaedic problem in dogs, involving damage to the ligament that helps stabilise the knee joint, which can lead to lameness, pain, and osteoarthritis.',
        'Patella Luxation': 'A condition in which the kneecap (patella) moves out of its normal position, causing pain, lameness, and arthritis.',
        'Elbow Disease': 'Refers to a variety of conditions that can affect the elbow joint in animals, including dysplasia, fragmentation, and osteoarthritis.',
        'Hip Disease': 'Refers to a variety of conditions that can affect the hip joint in animals including dysplasia and osteoarthritis.',
        'Anthrodeses "Joint Fusions"': 'A surgical procedure that permanently fuses two or more bones together, often used to treat severe joint pain or instability.',
        'Corrective Limb Alignment "Corrective Osteomies"': 'A surgical procedure to correct bone deformities in the limbs of animals.',
        'Spinal Surgery': 'A surgical procedure performed on the spine of animals to treat conditions such as herniated discs, spinal fractures, and spinal cord compression.',
        'Corns': 'A painful condition of the foot pad in animals that can require surgical removal.'
      },
        link: '/orthopaedics'
    },
    {
      title: 'REGENERATIVE MEDICINE, STEM CELL AND PRP THERAPY',
      content: {
      'Stem Cell Therapy': 'A form of regenerative medicine that involves using stem cells, which have the ability to differentiate into various types of cells, to repair or replace damaged tissues in the body.', 
      'Platelet Rich Plasma': "A type of regenerative medicine that involves using a patient's own blood plasma, which is enriched with platelets and growth factors, to promote tissue healing and regeneration"
      },
      link: '/regenerative-medicine'
    },
    {
      title: 'PHOTOBIOMODULATION / LASER THERAPY (PBMT)',
      content: {'Laser Therapy': 'A non-invasive, non-drug treatment. Using a Class IV laser near infra-red light is transmitted into diseased tissue. The resulting biochemical cellular effects, result in reduced pain and inflammation, whilst promoting healing.'},
      link: '/photobiomodulation'
    }
  ];

  return (
    <div>
      <div id='our-services' className="accordion">
        {accordionData.map(({ title, content, link }, index) => (
          <Accordion key={index} title={title} content={content} link={link} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;