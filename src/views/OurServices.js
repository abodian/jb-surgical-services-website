import React from 'react';
import Accordion from '../components/Accordions/Accordion';
require('./OurServices.css')


const OurServices = () => {
  const accordionData = [
    {
      title: 'SOFT TISSUE SURGERY',
      content: {'Cutaneous': 'Cutaneous surgery refers to surgical procedures performed on the skin and subcutaneous tissue', 
      'Ocular Surgery': "Ocular surgery involves surgeries on the eyes and their adnexa", 
      'Airway Surgery': "Airway surgery is a set of surgical procedures that deal with the respiratory tract", 
      'Hernia': "Hernia surgery involves repairing a weakened or torn abdominal wall", 
      'Urinary': 'Urinary surgery refers to surgical procedures on the urinary tract, including the kidneys, ureters, bladder, and urethra'}
    },
    {
      title: 'ORTHOPAEDIC',
      content: {
        'Diagnostics': 'Procedures used to diagnose orthopaedic problems in animals, including physical examinations, imaging studies (such as X-rays, CT scans, and MRI), and laboratory tests.',
        'Regenerative Medicine': "A field of medicine that focuses on using the body's own regenerative processes to heal injured tissues, often through the use of stem cells or growth factors.",
        'Fracture Repair': 'Surgical procedures used to repair broken bones, which can involve the use of pins, plates, screws, or other devices to hold the bone in place while it heals.',
        'Cranial Curcicate Ligament Disease': 'A common orthopaedic problem in dogs, involving damage to the ligament that helps stabilise the knee joint, which can lead to lameness, pain, and osteoarthritis.',
        'Patella Luxation': 'A condition in which the kneecap (patella) moves out of its normal position, causing pain, lameness, and arthritis.',
        'Elbow Disease': 'Refers to a variety of conditions that can affect the elbow joint in animals, including dysplasia, fragmentation, and osteoarthritis.',
        'Hip Disease': 'Refers to a variety of conditions that can affect the hip joint in animals, including dysplasia, osteoarthritis, and femoral head osteotomy.',
        'Anthrodeses "Joint Fusions"': 'A surgical procedure that permanently fuses two or more bones together, often used to treat severe joint pain or instability.',
        'Corrective Limb Alignment "Corrective Osteomies"': 'A surgical procedure to correct bone deformities in the limbs of animals.',
        'Spinal Surgery': 'A surgical procedure performed on the spine of animals to treat conditions such as herniated discs, spinal fractures, and spinal cord compression.',
        'Corns': 'A painful condition of the foot pad in animals that can require surgical removal.'
      }
    },
    {
      title: 'REGENERATIVE MEDICINE',
      content: {
      'Stem Cell Therapy': 'A form of regenerative medicine that involves using stem cells, which have the ability to differentiate into various types of cells, to repair or replace damaged tissues in the body.', 
      'Platelet Rich Plasma': "A type of regenerative medicine that involves using a patient's own blood plasma, which is enriched with platelets and growth factors, to promote tissue healing and regeneration"}
    },
    {
      title: 'PHOTOBIOMODULATION',
      content: {'Laser Therapy': 'A non-invasive treatment modality that uses low-level laser or light emitting diode (LED) devices to stimulate cellular activity and promote tissue healing, reducing inflammation and pain.'}
    }
  ];

  return (
    <div>
      <div id='our-services' className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;