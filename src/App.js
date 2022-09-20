import React from 'react';

import palavras from './utils/palavras';
import alfabeto from './utils/alfabeto';

import { Letras } from './components/Letras';
import { Chute } from './components/Chute';
import { Jogo } from './components/Jogo';

import { Container, ContentInfoForca, ContentLetters } from './styles/style';

export default function App() {

  const [startGame, setStartGame] = React.useState(false); // Iniciar Game
  const [wordDrawn, setWordDrawn] = React.useState(null); // Palavra sorteada
  // const [letterSelected, setLetterSelected] = React.useState([]); // Letra selecionada
  const [wordSelectedInput, setWordSelectedInput] = React.useState(); //palavra digitada no input

  const shuffle = () => {
    return Math.random() - 0.5;
  }

  const handleChooseWord = () => {
    setStartGame(true);
    setWordDrawn(palavras.sort(shuffle)[0]);
  }

  return (
    <Container>
      <Jogo
        startGame={startGame}
        setStartGame={setStartGame}
        handleChooseWord={handleChooseWord}
        wordDrawn={wordDrawn}
        wordSelectedInput={wordSelectedInput}
      />

      <ContentInfoForca>

        <ContentLetters>
          {alfabeto.map((i) => (
            <Letras
              key={i}
              name={i}
              startGame={startGame}
              wordDrawn={wordDrawn}
            />
          ))}
        </ContentLetters>

        <Chute 
        startGame={startGame} 
        wordDrawn={wordDrawn}
        wordSelectedInput={wordSelectedInput}
        setWordSelectedInput={setWordSelectedInput}
        />

      </ContentInfoForca>
    </Container>
  )
}
