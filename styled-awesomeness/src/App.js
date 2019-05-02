import React, { Component, Fragment } from 'react';
import "./App.css";

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

const Button = ({isDanger}) => {
  return (
    <button className={isDanger ? "button button--danger" : "button button--success"}>Hello</button>
  )
}

export default App;
