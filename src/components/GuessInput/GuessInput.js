import React from 'react';

function GuessInput({ addGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    addGuess(tentativeGuess);
    setTentativeGuess('');
  }

  const isHidden = gameStatus !== 'running';

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required={!isHidden}
        pattern="[A-Z]{5}"
        maxLength="5"
        title="5 letter word"
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
        disabled={isHidden}
        style={{ visibility: isHidden ? 'hidden' : 'visible' }}
      />
    </form>
  );
}

export default GuessInput;
