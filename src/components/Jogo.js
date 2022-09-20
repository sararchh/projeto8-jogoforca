import React from 'react';

import { ContentForca } from '../styles/style';

export function Jogo({ handleChooseWord, wordDrawn, wordSelectedInput }) {
  let arrayWordDrawn;

  // React.useEffect(() => {
    if (wordDrawn !== null) {
      arrayWordDrawn = wordDrawn.split('');
      console.log('palavra chave', arrayWordDrawn);
    }
  // }, [wordDrawn]);

  return (
    <ContentForca>
      <img data-identifier="game-image" src='/assets/forca0.png' alt='forca' />
      <button data-identifier="choose-word" onClick={handleChooseWord}>Escolher Palavra</button>

      <h1 data-identifier="word">
        {arrayWordDrawn?.map((i) => ' _ ')}
      </h1>
    </ContentForca>
  );
}
