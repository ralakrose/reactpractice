import "./App.css";
import React, { Component } from "react";
import Validation from "./Validation/Validation";

class App extends Component {
  state = {
    input: "",
  };
  inputChangedHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.input}
        />
        <p>{this.state.input}</p>
        <Validation inputLength={this.state.input.length} />
      </div>
    );
  }
}

export default App;
