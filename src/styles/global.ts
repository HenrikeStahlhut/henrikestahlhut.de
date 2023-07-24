import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --background-blue: #63BCC9;
  --background-violet: #C599D1;
  --background-pink: #E7B7C8;
  --background-orange: #FFBE88;  
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

/* @font-face {
  font-family: NewYork;
  src: local("NewYork"), url("./fonts/NewYork.otf") format("otf");
} */

`;
