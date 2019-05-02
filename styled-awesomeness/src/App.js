import React, { Component, Fragment } from 'react';
// import "./App.css";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`

const Input = styled.input.attrs({
  required: true
})`
  border-radius: 5px;
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
`

export default App;
