import React from "react";
import Grid from "../Grid";
import Header from "../Header";
import UserInput from "../UserInput";
import ImageContainer from "../ImageContainer";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";

import store from "../State";

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
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Grid />
      <UserInput />
      <ImageContainer />
    </Provider>
  );
}

export default App;
