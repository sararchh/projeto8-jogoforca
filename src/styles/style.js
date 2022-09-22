import styled from 'styled-components';

export const Container = styled.div`

  height: auto;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: var(--black);
  }
`;

export const ContentForca = styled.div`
   display: flex;
   width: 700px;
   align-items: flex-end;
   justify-content: space-between;
   position: relative;

  p {
    letter-spacing: 5px;
  }

   img {
    width: 400px;
   }

   button {
    width: 150px;
    height: 60px;
  
    font-size: 15px;

    position: absolute;
    right: 0;
    top: 30px;

    color: var(--shape);
    background: var(--green);
  
    border-radius: 7px;
   }

   h1 {
    font-size: 40px;
    margin-right: 5px;
   }
`;

export const ContentInfoForca = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 30px;

  h1 {
    color: red;
  }
`;


export const CardLetter = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 5px;
  border-radius: 5px;

  cursor: pointer;

  border: ${({ startGame }) => startGame ? '1px solid #7aa7c7' : 'none'};
  background: ${({ startGame }) => startGame ? 'var(--blue-100)' : 'var(--cinza-200)'};

  p {
    color: ${({ startGame }) => startGame ? 'var(--blue-200)' : 'var(--cinza-300)'};
    font-weight: bold;
  }

`;

export const ContentLetters = styled.div`
  width: 600px;
  display: flex;
  margin-left: 50px;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContentKick = styled.div`
  width: 750px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    height: 40px;
    width: 300px;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
  }

  button {
    background-color: var(--blue-100);
    border-radius: 5px;
    border: 1px solid #7aa7c7;
    font-size: 14px;
    font-weight: 800;
    color: var(--blue-200);
    margin: 4px;
    height: 40px;
    padding: 0 10px;
  }
`;







