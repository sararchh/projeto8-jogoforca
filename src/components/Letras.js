import React from 'react';

import { CardLetter } from '../styles/style';

export function Letras({name , startGame, wordDrawn}) {
  return (
        <>
          <CardLetter data-identifier="letter" startGame={startGame} > <p>{name.toUpperCase()}</p></CardLetter>
        </>
      )
}
