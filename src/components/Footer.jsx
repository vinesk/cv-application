import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <a
        className='footer-link'
        href='https://github.com/vinesk'
        target='_blank'
      >
        <FaGithub /> vinesk
      </a>
    </footer>
  );
};

export default Footer;
