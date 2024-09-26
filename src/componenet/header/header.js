import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
    </header>
  );
};

export default Header;
