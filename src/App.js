import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => this.setState({ monsters: user }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
