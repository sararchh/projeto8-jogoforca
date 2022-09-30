import React from 'react';

import palavras from './utils/palavras';
import alfabeto from './utils/alfabeto';
import { normalizeString } from './utils/string';

import { Letras } from './components/Letras';
import { Chute } from './components/Chute';
import { Jogo } from './components/Jogo';

import { Container, ContentInfoForca, ContentLetters } from './styles/style';

let arraySelectedWord;
export default function App() {

  const [startGame, setStartGame] = React.useState(false); 
  const [wordDrawn, setWordDrawn] = React.useState(null); 
  const [arrayWordDrawn, setArrayWordDrawn] = React.useState(null); 
  const [wordSelectedInput, setWordSelectedInput] = React.useState(); 
  const [hitWordInput, setHitWordInput] = React.useState(false);
  const [wrongWord, setWrongWord] = React.useState(false);
  const [qtdError, setQtdError] = React.useState(0);
  const [clickedLetters, setClickedLetters] = React.useState([]); 
  const [alphabet] = React.useState(alfabeto); 
  const [correctLetters, setCorrectLetters] = React.useState([]); 

  const shuffle = () => {
    return Math.random() - 0.5;
  }

  const handleChooseWord = () => {
    setStartGame(true);

    setWordSelectedInput('');
    setHitWordInput(false);
    setWrongWord(false);
    setQtdError(0);
    setCorrectLetters([]);
    setClickedLetters([]);

    let selectedWord = palavras.sort(shuffle)[0];
    setWordDrawn(selectedWord);
    arraySelectedWord = normalizeString(selectedWord).split('');
    console.log('palavra escolhida', arraySelectedWord)
    setArrayWordDrawn(arraySelectedWord);
  }

  const handleClickLetter = (event) => {
    if (!startGame) return;

    let textLetter = (event.target.innerText).toLowerCase();
    clickedLetters.push(textLetter);

    let acertou = false;

    arrayWordDrawn.forEach((i) => {
      if (i === textLetter) {
        acertou = true;
        handleCorrectLetters(textLetter);
      }

    })

    if (acertou === false) {
      handleSetError();
    }

  }

  const handleCorrectLetters = (text) => {
    const array = [...correctLetters];
    array.push(text);
    setCorrectLetters(array);
  }

  // Adicionado tratamento para erro de imagem
  const handleSetError = () => {
    if (qtdError < 6) {
      setQtdError(qtdError + 1);
    }
  }

  return (
    <Container>
      <Jogo
        handleChooseWord={handleChooseWord}
        wordDrawn={wordDrawn}
        arrayWordDrawn={arrayWordDrawn}
        hitWordInput={hitWordInput}
        setHitWordInput={setHitWordInput}
        wrongWord={wrongWord}
        setWrongWord={setWrongWord}
        qtdError={qtdError}
        correctLetters={correctLetters}
        setStartGame={setStartGame}
      />

      <ContentInfoForca>

        <ContentLetters>
          {alphabet.map((i, index) => (
            <Letras
              key={index}
              name={i}
              startGame={startGame && !clickedLetters.includes(i)}
              handleClickLetter={handleClickLetter}
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
