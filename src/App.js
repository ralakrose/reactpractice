import "./App.css";
import React, { Component } from "react";
import Input from "./components/Input";

class App extends Component {
  state = {
    paragraph: "",
  };

  characterLength = (event) => {
    this.setState({
      paragraph: event.target.value.length,
    });
  };

  render() {
    return (
      <div>
        <Input changed={this.characterLength} length={this.state.paragraph} />
      </div>
    );
  }
}

export default App;
