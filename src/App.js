import React from 'react';
import palavras from './palavras';
import alfabeto from './alfabeto';

import { Container, ContentForca, ContentInfoForca, CardLetter, ContentLetters, ContentKick } from './styles/style';

const Alphabet = ({ name }) => {
  return (
    <CardLetter> <p>{name}</p></CardLetter>
  )
}

export default function App() {
  return (
    <Container>

      <ContentForca>
        <img src='/assets/forca0.png' alt='forca' />
        <button>Escolher Palavra</button>

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
          <input type='text' />
          <button>Chutar</button>
        </ContentKick>

      </ContentInfoForca>
    </Container>
  )
}
