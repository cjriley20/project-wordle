import React from 'react';

function Banner({ status, numGuesses, answer }) {
  let bannerContent;

  if (status === 'won') {
    bannerContent = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numGuesses} guesses</strong>.
        </p>
      </div>
    );
  } else if (status === 'lost') {
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
