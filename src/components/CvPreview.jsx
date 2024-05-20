import React from 'react';
import '../styles/CvPreview.css';

const CvPreview = ({ generalInfo, educations, experiences }) => {
  return (
    <section className='cv-preview'>
      <div className='cv-preview-section'>
        <h2>General Information</h2>
        <div className='cv-preview-item'>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>
        </div>
      </div>
      <div className='cv-preview-section'>
        <h2>Educations</h2>
        {educations.map((education) => (
          <div key={education.id} className='cv-preview-item'>
            <p>School: {education.school}</p>
            <p>Degree: {education.degree}</p>
            <p>Date: {education.date}</p>
          </div>
        ))}
      </div>
      <div className='cv-preview-section'>
        <h2>Experiences</h2>
        {experiences.map((experience) => (
          <div key={experience.id} className='cv-preview-item'>
            <p>Company: {experience.company}</p>
            <p>Position: {experience.position}</p>
            <p>Responsabilities: {experience.responsabilities}</p>
            <p>From - To: {experience.fromTo}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CvPreview;
