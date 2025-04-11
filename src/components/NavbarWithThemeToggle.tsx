
import React from 'react';
import Navbar from './Navbar';
import { ThemeToggle } from './ThemeToggle';

const NavbarWithThemeToggle = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="absolute top-4 right-4 md:right-8">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavbarWithThemeToggle;
