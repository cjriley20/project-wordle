import React from 'react';

function Banner({ gameStatus, numGuesses, answer }) {
  let bannerContent;

  if (gameStatus === 'won') {
    bannerContent = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numGuesses} guesses</strong>.
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
