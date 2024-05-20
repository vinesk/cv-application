import React from 'react';

const GeneralInformation = ({ generalInfo, handleGeneralInfoChange }) => {
  return (
    <form className='form'>
      <div className='form-section'>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          name='name'
          id='name'
          value={generalInfo.name}
          onChange={handleGeneralInfoChange}
        />
      </div>

      <div className='form-section'>
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          name='email'
          id='email'
          value={generalInfo.email}
          onChange={handleGeneralInfoChange}
        />
      </div>

      <div className='form-section'>
        <label htmlFor='phone'>Phone: </label>
        <input
          type='tel'
          name='phone'
          id='phone'
          value={generalInfo.phone}
          onChange={handleGeneralInfoChange}
        />
      </div>
    </form>
  );
};

export default GeneralInformation;
