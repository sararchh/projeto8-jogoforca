import React from 'react';
import images from '../utils/images';

import { ContentForca } from '../styles/style';

export function Jogo({
  handleChooseWord,
  arrayWordDrawn,
  hitWordInput,
  setHitWordInput,
  wrongWord,
  setWrongWord,
  wordDrawn,
  qtdError,
  correctLetters,
  setStartGame
}) {

  let qtdLetterWord = [];

  return (
    <ContentForca>
      <img data-identifier="game-image" src={`${images[qtdError]}`} alt='forca' />
      <button data-identifier="choose-word" onClick={handleChooseWord}>Escolher Palavra</button>

      <h1 data-identifier="word">
        {hitWordInput ?
          (<p style={{ color: 'var(--green)' }}>{wordDrawn}</p>)
          :
          wrongWord ?
            (<p style={{ color: 'var(--red)' }}>{wordDrawn}</p>)
            :
            arrayWordDrawn?.map((i) => {

              if( qtdError === 6){
                setWrongWord(true);
                setStartGame(false);
              }

              if (correctLetters.includes(i)) {
                qtdLetterWord.push(i);
                if (qtdLetterWord.length === arrayWordDrawn.length) {
                  setHitWordInput(true);
                  setStartGame(false);
                }
                return i;
              } else {
                return ' _ ';
              }
            })
        }

      </h1>
    </ContentForca>
  );

}
