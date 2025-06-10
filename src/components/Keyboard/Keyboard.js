import React from 'react';

const ROWS = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

const ROW_LETTERS = ROWS.map((string) => string.toUpperCase().split(''));

console.log(ROW_LETTERS);

function Keyboard() {
  return (
    <div className="keyboard">
      {ROW_LETTERS.map((row) => (
        <div className="keyboard-row">
          {row.map((letter) => (
            <div className="letter">{letter}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
