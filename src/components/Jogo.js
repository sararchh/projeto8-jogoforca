import React from 'react';

import { ContentForca } from '../styles/style';

export function Jogo({ handleChooseWord, arrayWordDrawn, hitWordInput, wrongWord, wordDrawn }) {

  return (
    <ContentForca>
      <img data-identifier="game-image" src='/assets/forca0.png' alt='forca' />
      <button data-identifier="choose-word" onClick={handleChooseWord}>Escolher Palavra</button>

      <h1 data-identifier="word">
        {hitWordInput ?
          (<h2 style={{color: 'var(--green)'}}>{wordDrawn}</h2>)
          :
          wrongWord ?
            (<h2 style={{color: 'var(--red)'}}>{wordDrawn}</h2>)
            :
            arrayWordDrawn?.map((i) => ' _ ')
        }

      </h1>
    </ContentForca>
  );
}
