import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const checkedGuess = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={`cell ${value ? checkedGuess[num].status : undefined}`}
        >
          {value ? checkedGuess[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
