import React from 'react';

import { ContentKick } from '../styles/style';
import { normalizeString } from '../utils/string';

export function Chute({
  startGame,
  wordDrawn,
  wordSelectedInput,
  setWordSelectedInput,
  setHitWordInput,
  setWrongWord,
  setStartGame,
  setQtdError
}) {

  const handleSelectedWord = () => {
    if (!wordSelectedInput) return;
    setStartGame(false);

    if (normalizeString(wordDrawn.trim()) === normalizeString(wordSelectedInput.trim())) {
      setHitWordInput(true);
    } else {
      setWrongWord(true);
      setQtdError(6);
    }
    console.log('wordDrawn', normalizeString(wordDrawn));
    console.log('wordSelectedInput', normalizeString(wordSelectedInput));
  }

  return (
    <ContentKick>
      <p>Já sei a palavra!</p>

      {startGame ?
        (<input
          data-identifier="type-guess"
          type='text'
          onChange={(e) => setWordSelectedInput(e.target.value)}
          value={wordSelectedInput}
        />)
        :
        (<input type='text' disabled />)
      }

      <button data-identifier="guess-button" onClick={handleSelectedWord}>Chutar</button>
    </ContentKick>
  );
}

