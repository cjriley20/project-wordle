import React from 'react';

function Banner({ gameStatus, numOfGuesses, answer }) {
  let bannerContent;

  if (gameStatus === 'won') {
    bannerContent = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
          </strong>
          .
        </p>
      </div>
    );
  } else if (gameStatus === 'lost') {
    bannerContent = (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  return bannerContent;
}

export default Banner;
