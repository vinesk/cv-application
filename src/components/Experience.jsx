import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const Experience = ({
  id,
  experience,
  handleExperienceChange,
  removeExperience,
}) => {
  const [inputIds, setInputIds] = useState({});

  useEffect(() => {
    setInputIds({
      company: uuidv4(),
      position: uuidv4(),
      responsibilities: uuidv4(),
      fromTo: uuidv4(),
    });
  }, [id]);

  return (
    <form className='form'>
      <div className='form-section'>
        <label htmlFor={inputIds.company}>Company: </label>
        <input
          type='text'
          id={inputIds.company}
          name='company'
          value={experience.company}
          onChange={(e) => handleExperienceChange(id, e)}
        />
      </div>

      <div className='form-section'>
        <label htmlFor={inputIds.position}>Position: </label>
        <input
          type='text'
          id={inputIds.position}
          name='position'
          value={experience.position}
          onChange={(e) => handleExperienceChange(id, e)}
        />
      </div>

      <div className='form-section'>
        <label htmlFor={inputIds.responsibilities}>Responsibilities: </label>
        <textarea
          id={inputIds.responsibilities}
          name='responsibilities'
          value={experience.responsibilities}
          onChange={(e) => handleExperienceChange(id, e)}
        ></textarea>
      </div>

      <div className='form-section'>
        <label htmlFor={inputIds.fromTo}>From - To: </label>
        <input
          type='text'
          id={inputIds.fromTo}
          name='fromTo'
          value={experience.fromTo}
          onChange={(e) => handleExperienceChange(id, e)}
        />
      </div>

      <div className='form-section'>
        <button type='button' onClick={() => removeExperience(id)}>
          <FaTrash /> Remove
        </button>
      </div>
    </form>
  );
};

export default Experience;
