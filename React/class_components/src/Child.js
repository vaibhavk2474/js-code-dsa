import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor: Component is being created");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("Child getDerivedStateFromProps: Syncing state and props");
    return null; // No state update
  }

  componentDidMount() {
    console.log("Child componentDidMount: Component has been mounted");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "Child shouldComponentUpdate: Should component update?",
      nextState.count !== this.state.count
    );
    return nextState.count !== this.state.count; // Only update if count changes
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Child componentDidUpdate: Component has been updated");
    if (prevState.count !== this.state.count) {
      console.log(
        `Child Count updated from ${prevState.count} to ${this.state.count}`
      );
    }
  }

  componentWillUnmount() {
    console.log(
      "Child componentWillUnmount: Component is about to be unmounted"
    );
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    console.log("Child render");

    return (
      <div>
        <h2>Child Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>
      </div>
    );
  }
}

export default Child;
