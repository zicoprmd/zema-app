import React from 'react';
import './Nav.scss';
import { BiHomeAlt } from 'react-icons/bi';
import { HiOutlineUser } from 'react-icons/hi';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { MdOutlineMedicalServices } from 'react-icons/md';
import { MdOutlineMessage } from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav id="theNav">
      <a
        href="#banner"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}>
        <BiHomeAlt />
      </a>
      <a
        href="#zema1"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <HiOutlineUser />
      </a>
      <a
        href="#zema2"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}>
        <BsFillJournalBookmarkFill />
      </a>
      <a
        href="#zema10"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}>
        <MdOutlineMedicalServices />
      </a>
      <a
        href="#newsletter"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
        <MdOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
