import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import '../styles/Accordion.css';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordion'>
      <h3 className='accordion-title' onClick={handleClick}>
        {title}
        <FaChevronDown className={`accordion-chevron ${isOpen && 'open'}`} />
      </h3>
      {isOpen && <div className='accordion-content'>{children}</div>}
    </div>
  );
};

export default Accordion;
