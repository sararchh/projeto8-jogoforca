import React from 'react';

import { ContentKick } from '../styles/style';

export function Chute({ startGame, wordDrawn, wordSelectedInput, setWordSelectedInput }) {

  const handleSelectedWord = () => {
    if (!wordSelectedInput) return;

    if (wordDrawn === wordSelectedInput) {
      console.log('parabens');
    }
    console.log('palavra desafio - wordDrawn', wordDrawn)
    console.log('palavra chutada - wordSelectedInput', wordSelectedInput)

    // passar para o app wordSelectedInput e depois fazer o if de comparacao no jogo
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

