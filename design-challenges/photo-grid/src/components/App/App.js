import React from "react";
import Grid from "../Grid";
import Header from "../Header";
import UserInput from "../UserInput";
import ImageContainer from "../ImageContainer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
        background-color: #f1f3f8;
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
      <ImageContainer />
    </>
  );
}

export default App;
