class components [Code Links](https://codesandbox.io/p/sandbox/bold-ishizaka-jd46kc?file=%2Fsrc%2FApp.js%3A24%2C17)

functional componets [Code Links](https://codesandbox.io/p/sandbox/dark-dust-x2shsj?file=%2Fsrc%2FApp.js%3A10%2C1)

In React, class components provide a more traditional object-oriented approach to building components. Let's create a class component `App` that includes methods to increase and decrease a count value. We'll also make use of React's lifecycle methods: mount phase, updating phase, and unmounting phase.

Here's a detailed example:

### Step-by-Step Guide

#### 1. Setup the Project

Ensure you have a React project set up. If not, you can create one using Create React App:

```sh
npx create-react-app my-app
cd my-app
npm start
```

#### 2. Create the `App` Component

In the `src` directory, edit the `App.js` file or create a new file for the component.

### App.js

```javascript
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      count: 0,
    };
    console.log("Constructor: Component is being created");
  }

  // Mounting phase methods
  componentDidMount() {
    console.log("ComponentDidMount: Component has been mounted");
  }

  // Updating phase methods
  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate: Component has been updated");
    if (prevState.count !== this.state.count) {
      console.log(
        `Count updated from ${prevState.count} to ${this.state.count}`
      );
    }
  }

  // Unmounting phase method
  componentWillUnmount() {
    console.log("ComponentWillUnmount: Component is about to be unmounted");
  }

  // Method to increase the count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Method to decrease the count
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>
      </div>
    );
  }
}

export default App;
```

### Explanation

1. **Constructor**: Initializes the state with a `count` of `0` and logs a message indicating the component is being created.

2. **Mounting Phase (`componentDidMount`)**: This lifecycle method is invoked immediately after the component is mounted (inserted into the tree). It logs a message indicating the component has been mounted.

3. **Updating Phase (`componentDidUpdate`)**: This lifecycle method is invoked immediately after updating occurs. It checks if the `count` state has changed and logs the previous and current count values.

4. **Unmounting Phase (`componentWillUnmount`)**: This lifecycle method is invoked immediately before a component is unmounted and destroyed. It logs a message indicating the component is about to be unmounted.

5. **Event Handlers (`increment` and `decrement`)**: These methods are used to modify the `count` state when the respective buttons are clicked. The state is updated using the `setState` method.

6. **Render Method**: This method returns the JSX to be rendered. It includes the current count and two buttons for increasing and decreasing the count.

### Usage

With this setup, you can now run your React app, and you should see the `App` component displaying the current count with buttons to increase and decrease it. The console will log messages as the component mounts, updates, and unmounts, illustrating the lifecycle methods in action.

Certainly! In a React class component, lifecycle methods are called at different stages of the component's existence. Here’s the order in which these methods are executed in the `App` component provided:

### Mounting Phase

1. **`constructor`**: Called when the component is being created and initialized.
2. **`render`**: Called to render the component's UI.
3. **`componentDidMount`**: Called immediately after the component is mounted (inserted into the DOM).

### Updating Phase

When the component's state or props change, the following methods are called:

1. **`render`**: Called to re-render the component's UI with the updated state or props.
2. **`componentDidUpdate`**: Called immediately after the component's updates are flushed to the DOM. This method receives the previous props and state as arguments.

### Unmounting Phase

When the component is about to be removed from the DOM, the following method is called:

1. **`componentWillUnmount`**: Called immediately before the component is unmounted and destroyed.

### Detailed Example Execution Order

#### Initial Mounting

1. **`constructor`**: Initializes the state.

   ```javascript
   constructor(props) {
     super(props);
     this.state = { count: 0 };
     console.log('Constructor: Component is being created');
   }
   ```

2. **`render`**: Renders the component's UI for the first time.

   ```javascript
   render() {
     return (
       <div>
         <h1>Count: {this.state.count}</h1>
         <button onClick={this.increment}>Increase</button>
         <button onClick={this.decrement}>Decrease</button>
       </div>
     );
   }
   ```

3. **`componentDidMount`**: Runs after the component is inserted into the DOM.
   ```javascript
   componentDidMount() {
     console.log('ComponentDidMount: Component has been mounted');
   }
   ```

#### Updating (e.g., when `increment` or `decrement` is called)

1. **State Update Trigger**: A state update is triggered by calling `this.setState`.

   ```javascript
   increment = () => {
     this.setState((prevState) => ({
       count: prevState.count + 1,
     }));
   };
   ```

2. **`render`**: Re-renders the component's UI with the updated state.

   ```javascript
   render() {
     return (
       <div>
         <h1>Count: {this.state.count}</h1>
         <button onClick={this.increment}>Increase</button>
         <button onClick={this.decrement}>Decrease</button>
       </div>
     );
   }
   ```

3. **`componentDidUpdate`**: Runs after the component's updates are flushed to the DOM.
   ```javascript
   componentDidUpdate(prevProps, prevState) {
     console.log('ComponentDidUpdate: Component has been updated');
     if (prevState.count !== this.state.count) {
       console.log(`Count updated from ${prevState.count} to ${this.state.count}`);
     }
   }
   ```

#### Unmounting (e.g., if the component is removed from the DOM)

1. **`componentWillUnmount`**: Runs immediately before the component is unmounted and destroyed.
   ```javascript
   componentWillUnmount() {
     console.log('ComponentWillUnmount: Component is about to be unmounted');
   }
   ```

### Summary

1. **Initial Mounting**: `constructor` -> `render` -> `componentDidMount`
2. **Updating**: `render` -> `componentDidUpdate`
3. **Unmounting**: `componentWillUnmount`

By understanding this order, you can better manage the component's lifecycle and ensure that any necessary initialization, cleanup, or updates are handled correctly.

Sure, let's create a React application where the `App` component has a state to show or hide a `Child` component using a button. The `Child` component will have its own state to manage a count and buttons to increase and decrease the count. We'll use various lifecycle methods, including those we haven't used before (`getDerivedStateFromProps`, `shouldComponentUpdate`).

### Step-by-Step Implementation

#### 1. Setup the Project

Ensure you have a React project set up. If not, create one using Create React App:

```sh
npx create-react-app my-app
cd my-app
npm start
```

#### 2. Create the `Child` Component

In the `src` directory, create a new file named `Child.js`:

### Child.js

```javascript
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
```

#### 3. Create the `App` Component

Edit the `App.js` file to manage the visibility of the `Child` component.

### App.js

```javascript
import React, { Component } from "react";
import Child from "./Child";
import "./App.css";

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
```

### Explanation

1. **App Component**:

   - Manages the state `showChild` to show or hide the `Child` component.
   - Uses various lifecycle methods (`constructor`, `getDerivedStateFromProps`, `componentDidMount`, `shouldComponentUpdate`, `componentDidUpdate`, `componentWillUnmount`).

2. **Child Component**:
   - Manages its own `count` state and includes buttons to increase or decrease the count.
   - Uses various lifecycle methods similar to the `App` component.

### Order of Method Execution

#### Initial Mounting

1. **App Constructor**: Initializes the state.
2. **App getDerivedStateFromProps**: Syncing state and props (runs before `render`).
3. **App render**: Renders the `App` component and `Child` component.
4. **Child Constructor**: Initializes the state.
5. **Child getDerivedStateFromProps**: Syncing state and props (runs before `render`).
6. **Child render**: Renders the `Child` component.
7. **Child componentDidMount**: Runs after the `Child` component is inserted into the DOM.
8. **App componentDidMount**: Runs after the `App` component is inserted into the DOM.

#### Updating (e.g., toggling the `Child` component or updating the count)

1. **App toggleChild**: Updates the state to show or hide the `Child` component.
2. **App getDerivedStateFromProps**: Syncing state and props (runs before `render`).
3. **App shouldComponentUpdate**: Decides if the component should update.
4. **App render**: Renders the updated `App` component.
5. **App componentDidUpdate**: Runs after the `App` component's updates are flushed to the DOM.
6. **Child Constructor**: Initializes the state (if `Child` component is being re-mounted).
7. **Child getDerivedStateFromProps**: Syncing state and props (runs before `render`).
8. **Child render**: Renders the updated `Child` component.
9. **Child componentDidMount**: Runs after the `Child` component is inserted into the DOM.
10. **Child componentWillUnmount**: Runs before the `Child` component is removed from the DOM (if being unmounted).
11. **Child componentDidUpdate**: Runs after the `Child` component's updates are flushed to the DOM (if the state is updated).

### Conclusion

This example covers the key lifecycle methods in React class components, demonstrating how they are executed during the mounting, updating, and unmounting phases. The logs in the console will help you understand the exact order in which these methods are called.

To convert the same functionality into functional components, we'll use React Hooks such as `useState`, `useEffect`, and `useMemo` to manage state and lifecycle events. We can replicate the lifecycle methods and console logs with hooks.

### Step-by-Step Implementation

#### 1. Setup the Project

Ensure you have a React project set up as described previously.

#### 2. Create the `Child` Component

In the `src` directory, create a new file named `Child.js`:

### Child.js

```javascript
import React, { useState, useEffect } from "react";

const Child = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Child: Component has been mounted");

    return () => {
      console.log("Child: Component is about to be unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Child: Component has been updated");
    console.log(`Child: Count is now ${count}`);
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  console.log("Child: Render");

  return (
    <div>
      <h2>Child Count: {count}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default Child;
```

#### 3. Create the `App` Component

Edit the `App.js` file to manage the visibility of the `Child` component.

### App.js

```javascript
import React, { useState, useEffect } from "react";
import Child from "./Child";
import "./App.css";

const App = () => {
  const [showChild, setShowChild] = useState(true);

  useEffect(() => {
    console.log("App: Component has been mounted");

    return () => {
      console.log("App: Component is about to be unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("App: Component has been updated");
    console.log(`App: showChild is now ${showChild}`);
  }, [showChild]);

  const toggleChild = () => {
    setShowChild((prevShowChild) => !prevShowChild);
  };

  console.log("App: Render");

  return (
    <div className="App">
      <h1>App Component</h1>
      <button onClick={toggleChild}>
        {showChild ? "Hide" : "Show"} Child Component
      </button>
      {showChild && <Child />}
    </div>
  );
};

export default App;
```

### Explanation

1. **App Component**:

   - Manages the state `showChild` to show or hide the `Child` component.
   - Uses the `useEffect` hook to log messages similar to lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).

2. **Child Component**:
   - Manages its own `count` state and includes buttons to increase or decrease the count.
   - Uses the `useEffect` hook to log messages similar to lifecycle methods.

### Order of Method Execution

#### Initial Mounting

1. **App `useEffect`** (empty dependency array): Mimics `componentDidMount`.

   ```javascript
   useEffect(() => {
     console.log("App: Component has been mounted");
     return () => {
       console.log("App: Component is about to be unmounted");
     };
   }, []);
   ```

2. **App Render**: Logs `App: Render`.

3. **Child `useEffect`** (empty dependency array): Mimics `componentDidMount`.

   ```javascript
   useEffect(() => {
     console.log("Child: Component has been mounted");
     return () => {
       console.log("Child: Component is about to be unmounted");
     };
   }, []);
   ```

4. **Child Render**: Logs `Child: Render`.

#### Updating (e.g., toggling the `Child` component or updating the count)

1. **State Update Trigger**: `setShowChild` or `setCount` updates the state.

2. **App `useEffect`** (dependency array with `showChild`): Mimics `componentDidUpdate`.

   ```javascript
   useEffect(() => {
     console.log("App: Component has been updated");
     console.log(`App: showChild is now ${showChild}`);
   }, [showChild]);
   ```

3. **App Render**: Logs `App: Render`.

4. **Child `useEffect`** (dependency array with `count`): Mimics `componentDidUpdate`.

   ```javascript
   useEffect(() => {
     console.log("Child: Component has been updated");
     console.log(`Child: Count is now ${count}`);
   }, [count]);
   ```

5. **Child Render**: Logs `Child: Render`.

### Conclusion

By using functional components and React Hooks, we replicated the behavior of class components with similar lifecycle logs. The hooks `useEffect` and `useState` provide a powerful way to manage state and lifecycle events in functional components. The console logs help us understand the order in which these methods are executed during the mounting, updating, and unmounting phases.
