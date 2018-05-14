import React from 'react';

import NavBar from './nav-bar';

import './nav-bar.css';

export default function Header() {
  return (
    <header>
      <NavBar />
      <h1>HOT or COLD</h1>
    </header>
  );
}