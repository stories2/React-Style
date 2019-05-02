import React, { Component, Fragment } from 'react';
// import "./App.css";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Container>
          <Button isDanger={true}>Hello</Button>
          <Button isDanger={false}>Hello</Button>
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

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color:white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus{
    outline: none;
  }
  background-color: ${props => props.isDanger ? "#e74c3c" : "#2ecc71" }
`

export default App;
