import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

import Banner from '../Banner';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('running');

  function updateStatus(tentativeGuess) {
    const result = checkGuess(tentativeGuess, answer);
    if (result.every(({ status }) => status === 'correct')) {
      setStatus('won');
    } else if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    } else {
      setStatus('running');
    }
  }

  function addGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
    updateStatus(tentativeGuess);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} status={status} />
      <Banner status={status} numGuesses={guesses.length} answer={answer} />
    </>
  );
}

export default Game;
