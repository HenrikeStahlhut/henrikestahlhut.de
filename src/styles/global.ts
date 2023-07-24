import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'NewYork';
    src: url('./fonts/NewYork.woff2') format('woff2'),
        url('./fonts/NewYork.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

:root{
  --background-blue: #63BCC9;
  --background-violet: #C599D1;
  --background-pink: #E7B7C8;
  --background-orange: #FFBE88;  
  --highlight-color: #ADD8E6;
}

::selection{
  background: var(--highlight-color);
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--background-green);
  }

  h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
figure,
blockquote,
dl,
dd {
  padding: 0;
  margin: 0}

  button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}

li {
  list-style-type: none;
}

a{
  color: black;
  text-decoration: none;
}



`;
