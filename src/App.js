import React from 'react';
import palavras from './palavras';
import alfabeto from './alfabeto';

import { Container, ContentForca, ContentInfoForca, CardLetter, ContentLetters, ContentKick, CardLetterGame } from './styles/style';

export default function App() {
  const [startGame, setStartGame] = React.useState(false);

  const Alphabet = ({ name }) => {
    return (
      <>
        <CardLetter startGame={startGame}> <p>{name}</p></CardLetter>
      </>
    )
  }

  return (
    <Container>

      <ContentForca>
        <img src='/assets/forca0.png' alt='forca' />
        <button onClick={() => setStartGame(true)}>Escolher Palavra</button>

        <h1>_ _ _ _ _ _</h1>
      </ContentForca>

      <ContentInfoForca>

        <ContentLetters>
          {alfabeto.map((i) => (
            <Alphabet name={i} />
          ))}
        </ContentLetters>

        <ContentKick>
          <p>Já sei a palavra!</p>
          {startGame ?
            (<input type='text' />)
            :
            (<input type='text' disabled />)
          }
          <button>Chutar</button>
        </ContentKick>

      </ContentInfoForca>
    </Container>
  )
}
