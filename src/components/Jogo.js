import React from 'react';

import { ContentForca } from '../styles/style';

export function Jogo({ handleChooseWord, arrayWordDrawn}) {

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
