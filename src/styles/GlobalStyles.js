import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Lauthan";
  src: url("fonts/lauthan/Lauthan.ttf");
}

:root{
  --background: #F4F6F8;
  --shape: #ffffff;
  --red: red;
  --black: #000000;
  --green: #4faf61;
  --cinza-200: #a0aab6;
  --cinza-300: #79818a;
  --blue-100: #e1ecf4;
  --blue-200: #39739d;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior:smooth;
  
  @media (max-width: 1080px){
     font-size: 93.75%; /* 15px */
  }
  @media (max-width: 720px){
    font-size: 87.5%; /* 14px */
  }
}

body{
background: var(--shape);
-webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button{
  cursor: pointer;
  outline: none;
  border: none;
}

a{
  text-decoration: none;
  text-align: center;
  color: var(--text-title) !important;
}

`