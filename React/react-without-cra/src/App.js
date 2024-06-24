import React from "react";

const App = () => {
  const displayMessage = () => {
    alert("Button clicked!");
  };

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <button onClick={displayMessage}>Click Me</button>
    </div>
  );
};

export default App;
