import React, { Component } from "react";
import Child from "./Child";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: true,
    };
    console.log("App Constructor: Component is being created");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("App getDerivedStateFromProps: Syncing state and props");
    return null; // No state update
  }

  componentDidMount() {
    console.log("App componentDidMount: Component has been mounted");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "App shouldComponentUpdate: Should component update?",
      nextState.showChild !== this.state.showChild
    );
    return nextState.showChild !== this.state.showChild; // Only update if showChild changes
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App componentDidUpdate: Component has been updated");
    if (prevState.showChild !== this.state.showChild) {
      console.log(
        `App showChild updated from ${prevState.showChild} to ${this.state.showChild}`
      );
    }
  }

  componentWillUnmount() {
    console.log("App componentWillUnmount: Component is about to be unmounted");
  }

  toggleChild = () => {
    this.setState((prevState) => ({ showChild: !prevState.showChild }));
  };

  render() {
    console.log("App render");
    return (
      <div className="App">
        <h1>App Component</h1>
        <button onClick={this.toggleChild}>
          {this.state.showChild ? "Hide" : "Show"} Child Component
        </button>
        {this.state.showChild && <Child />}
      </div>
    );
  }
}

export default App;
