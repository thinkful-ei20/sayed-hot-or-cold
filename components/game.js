import React from 'react';

import GuessForm from './guess-form';

import GuessList from './guess-list';

import GuessCount from './guess-count';

import './game.css';

export default function Game() {
  return (
    <section>
      <h2>Make your Guess!</h2>
      <GuessForm />
      <GuessCount />
      <GuessList />
    </section>
  );
}