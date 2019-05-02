import React, { Component, Fragment } from 'react';
// import "./App.css";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Button isDanger={true}></Button>
        <Button isDanger={false}></Button>
      </Fragment>
    )
  }
}

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
`

export default App;
