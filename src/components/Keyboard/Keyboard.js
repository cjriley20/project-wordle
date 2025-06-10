import React from 'react';

const ROWS = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

const ROW_LETTERS = ROWS.map((string) => string.toUpperCase().split(''));

function getLetterStatus(validatedGuesses) {
  const letterStatus = {};

  const allLetters = validatedGuesses.flat();

  allLetters.forEach(({ letter, status }) => {
    letterStatus[letter] = status;
  });

  return letterStatus;
}

function Keyboard({ validatedGuesses }) {
  const letterStatus = getLetterStatus(validatedGuesses);

  return (
    <div className="keyboard">
      {ROW_LETTERS.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((letter) => (
            <div
              key={letter}
              className={`letter ${letterStatus[letter] || ''}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
