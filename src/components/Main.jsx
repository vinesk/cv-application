import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CvForm from './CvForm';
import CvPreview from './CvPreview';
import '../styles/Main.css';

const Main = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [educations, setEducations] = useState([
    {
      id: uuidv4(),
      school: '',
      degree: '',
      date: '',
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      id: uuidv4(),
      company: '',
      position: '',
      responsabilities: '',
      fromTo: '',
    },
  ]);

  return (
    <main className='main'>
      <CvForm
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        educations={educations}
        setEducations={setEducations}
        experiences={experiences}
        setExperiences={setExperiences}
      />
      <CvPreview
        generalInfo={generalInfo}
        educations={educations}
        experiences={experiences}
      />
    </main>
  );
};

export default Main;
