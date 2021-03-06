import "./App.css";
import React, { Component } from "react";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    input: "",
  };
  inputChangedHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  deleteCHarHandler = (index) => {
    const text = this.state.input.split("");
    text.splice(index, 1);
    const newText = text.join("");
    this.setState({ input: newText });
  };
  render() {
    const charList = this.state.input.split("").map((char, index) => {
      return (
        <Char
          character={char}
          key={index}
          clicked={() => this.deleteCHarHandler(index)}
        />
      );
    });

    return (
      <div>
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.input}
        />
        <p>{this.state.input}</p>
        <Validation inputLength={this.state.input.length} />
        {charList}
      </div>
    );
  }
}

export default App;
