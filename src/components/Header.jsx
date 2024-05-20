import React from 'react';
import { ImProfile } from 'react-icons/im';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header-title'>
        <ImProfile /> CV Builder
      </h1>
    </header>
  );
};

export default Header;
