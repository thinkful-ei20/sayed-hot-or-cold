import React from 'react';

import './nav-bar.css';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a className='what' href='#'>What?</a>
        </li>
        <li>
          <a className='newgame' href='#'>+ New Game</a>
        </li>
      </ul>
    </nav>
  );
}