import React, { Component, Fragment } from 'react';
// import "./App.css";
import styled, { createGlobalStyle, css, keyframes, ThemeProvider } from "styled-components";
import theme from './theme';

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
        <ThemeProvider theme={theme}>
          <Container>
            <Form />
          </Container>
        </ThemeProvider>
      </Fragment>
    )
  }
}

const Card = styled.div`
  background-color: red;
`

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor}
`

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
)

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`

export default App;
