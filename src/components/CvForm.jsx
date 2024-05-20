import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaPlus } from 'react-icons/fa';
import GeneralInformation from './GeneralInformation';
import Education from './Education';
import Experience from './Experience';
import Accordion from './Accordion';
import '../styles/CvForm.css';

const CvForm = ({
  generalInfo,
  setGeneralInfo,
  educations,
  setEducations,
  experiences,
  setExperiences,
}) => {
  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  };

  const handleEducationChange = (id, e) => {
    const { name, value } = e.target;
    setEducations(
      educations.map((education) =>
        education.id === id ? { ...education, [name]: value } : education
      )
    );
  };

  const handleExperienceChange = (id, e) => {
    const { name, value } = e.target;
    setExperiences(
      experiences.map((experience) =>
        experience.id === id ? { ...experience, [name]: value } : experience
      )
    );
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        id: uuidv4(),
        school: '',
        degree: '',
        date: '',
      },
    ]);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: uuidv4(),
        company: '',
        position: '',
        responsibilities: '',
        fromTo: '',
      },
    ]);
  };

  const removeEducation = (id) => {
    setEducations(educations.filter((education) => education.id !== id));
  };

  const removeExperience = (id) => {
    setExperiences(experiences.filter((experience) => experience.id !== id));
  };

  return (
    <section className='cv-form'>
      <Accordion title='General Information'>
        <GeneralInformation
          generalInfo={generalInfo}
          handleGeneralInfoChange={handleGeneralInfoChange}
        />
      </Accordion>
      <Accordion title='Educations'>
        {educations.map((education) => (
          <Education
            key={education.id}
            id={education.id}
            education={education}
            handleEducationChange={handleEducationChange}
            removeEducation={removeEducation}
          />
        ))}
        <button onClick={addEducation}>
          <FaPlus /> Add
        </button>
      </Accordion>
      <Accordion title='Experiences'>
        {experiences.map((experience) => (
          <Experience
            key={experience.id}
            id={experience.id}
            experience={experience}
            handleExperienceChange={handleExperienceChange}
            removeExperience={removeExperience}
          />
        ))}
        <button onClick={addExperience}>
          <FaPlus /> Add
        </button>
      </Accordion>
    </section>
  );
};

export default CvForm;
