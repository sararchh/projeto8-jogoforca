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
  const [arrayWordDrawn, setArrayWordDrawn] = React.useState(null); // Palavra sorteada em array
  const [wordSelectedInput, setWordSelectedInput] = React.useState(); //palavra digitada no input
  const [hitWordInput, setHitWordInput] = React.useState(false); //acertou a palavra
  const [wrongWord, setWrongWord] = React.useState(false); //errou a palavra
  const [qtdError, setQtdError] = React.useState(0); // quantidade de erros
  // const [letterSelected, setLetterSelected] = React.useState([]); // Letra selecionada

  const shuffle = () => {
    return Math.random() - 0.5;
  }

  const handleChooseWord = () => {
    setStartGame(true);

    setWordSelectedInput('');
    setHitWordInput(false);
    setWrongWord(false);
    setQtdError(0);

    let selectedWord = palavras.sort(shuffle)[0];
    setWordDrawn(selectedWord);
    console.log('palavra selecionada', selectedWord)

    setArrayWordDrawn(selectedWord.split(''));
  }

  return (
    <Container>
      <Jogo
        handleChooseWord={handleChooseWord}
        wordDrawn={wordDrawn}
        wordSelectedInput={wordSelectedInput}
        arrayWordDrawn={arrayWordDrawn}
        hitWordInput={hitWordInput}
        wrongWord={wrongWord}
        qtdError={qtdError}
        setQtdError={setQtdError}
      />

      <ContentInfoForca>

        <ContentLetters>
          {alfabeto.map((i, index) => (
            <Letras
              key={index}
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
          setHitWordInput={setHitWordInput}
          setWrongWord={setWrongWord}
          setStartGame={setStartGame}
          setQtdError={setQtdError}
        />

      </ContentInfoForca>
    </Container>
  )
}
