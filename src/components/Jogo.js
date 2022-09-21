import React from 'react';
import images from '../utils/images';

import { ContentForca } from '../styles/style';

export function Jogo({
  handleChooseWord,
  arrayWordDrawn,
  hitWordInput,
  wrongWord,
  wordDrawn,
  qtdError,
 }) {

  return (
    <ContentForca>
      <img data-identifier="game-image" src={`${images[qtdError]}`} alt='forca' />
      <button data-identifier="choose-word" onClick={handleChooseWord}>Escolher Palavra</button>

      <h1 data-identifier="word">
        {hitWordInput ?
          (<h2 style={{ color: 'var(--green)' }}>{wordDrawn}</h2>)
          :
          wrongWord ?
            (<h2 style={{ color: 'var(--red)' }}>{wordDrawn}</h2>)
            :
            arrayWordDrawn?.map((i) => ' _ ')
        }

      </h1>
    </ContentForca>
  );
}
