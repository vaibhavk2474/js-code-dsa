import React, { useState, useEffect } from "react";
import Child from "./Child";
import "./styles.css";
import useFirstRender from "./useFirstRender";

const App = () => {
  const [showChild, setShowChild] = useState(true);

  const isFirstRender = useFirstRender(1);

  useEffect(() => {
    console.log("App: Component has been mounted");

    return () => {
      console.log("App: Component is about to be unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate");

    if (isFirstRender) {
      return;
    }
    console.log("App: Component has been updated");
    console.log(`App: showChild is now ${showChild}`);
  }, [showChild]);

  const toggleChild = () => {
    setShowChild((prevShowChild) => !prevShowChild);
  };

  console.log("App: Render", isFirstRender);

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
