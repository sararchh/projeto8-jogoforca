import React from 'react';

import { CardLetter } from '../styles/style';

export function Letras({name , startGame, handleClickLetter}) {
  return (
        <>
          <CardLetter data-identifier="letter" startGame={startGame} onClick={handleClickLetter} > <p>{name.toUpperCase()}</p></CardLetter>
        </>
      )
}
