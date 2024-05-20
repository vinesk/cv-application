import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaTrash } from 'react-icons/fa';

const Education = ({
  id,
  education,
  handleEducationChange,
  removeEducation,
}) => {
  const [inputIds, setInputIds] = useState({});

  useEffect(() => {
    setInputIds({
      school: uuidv4(),
      degree: uuidv4(),
      date: uuidv4(),
    });
  }, [id]);

  return (
    <form className='form'>
      <div className='form-section'>
        <label htmlFor={inputIds.school}>School: </label>
        <input
          type='text'
          id={inputIds.school}
          name='school'
          value={education.school}
          onChange={(e) => handleEducationChange(id, e)}
        />
      </div>

      <div className='form-section'>
        <label htmlFor={inputIds.degree}>Degree: </label>
        <input
          type='text'
          id={inputIds.degree}
          name='degree'
          value={education.degree}
          onChange={(e) => handleEducationChange(id, e)}
        />
      </div>

      <div className='form-section'>
        <label htmlFor={inputIds.date}>Date: </label>
        <input
          type='text'
          id={inputIds.date}
          name='date'
          value={education.date}
          onChange={(e) => handleEducationChange(id, e)}
        />
      </div>

      <div className='form-section'>
        <button type='button' onClick={() => removeEducation(id)}>
          <FaTrash /> Remove
        </button>
      </div>
    </form>
  );
};

export default Education;
