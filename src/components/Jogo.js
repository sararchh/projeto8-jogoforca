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
  correctLetters
}) {

  const [correct, setCorrect] = React.useState(correctLetters);

  React.useEffect(() => {

    setCorrect(correctLetters);

  }, [correctLetters]);

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
              if (correct.includes(i)) {
                return i;
              } else {
                return ' _ ';
              }
            })
        }

        {/* {arrayWordDrawn?.map((i) => {
          if (correct.includes(i)) {
            return i;
          } else {
            return ' _ ';
          }
        })} */}

      </h1>
    </ContentForca>
  );
}
