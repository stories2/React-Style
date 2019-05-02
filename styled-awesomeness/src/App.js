import React, { Component, Fragment } from 'react';
// import "./App.css";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.88);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`

const Input = styled.input.attrs({
  required: true
})`
  border: none;
  ${awesomeCard}
`

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Container>
          <Input placeholder="hello"></Input>
        </Container>
      </Fragment>
    )
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
  /* ${awesomeCard} */
`

export default App;
