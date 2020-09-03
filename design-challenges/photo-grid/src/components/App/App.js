import React from "react";
import Grid from "../Grid";
import Header from "../Header";
import UserInput from "../UserInput";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
    }
    *:focus {
      outline: none;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Grid />
      <UserInput />
    </>
  );
}

export default App;
