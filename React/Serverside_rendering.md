If you want to implement server-side rendering (SSR) using just React and Node.js without relying on frameworks like Next.js, you can do so by using libraries such as `express` for the server and `react-dom/server` for rendering React components to static markup. Below is a step-by-step guide on how to achieve this:

### Step 1: Set Up Your Project

First, initialize a new Node.js project and install the necessary dependencies.

```bash
mkdir my-ssr-app
cd my-ssr-app
npm init -y
npm install react react-dom express @babel/core @babel/preset-env @babel/preset-react babel-register
```

### Step 2: Configure Babel

Create a Babel configuration file to transpile JSX and modern JavaScript syntax.

**babel.config.js**

```javascript
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
```

### Step 3: Create React Components

Create a simple React component that will be rendered on the server.

**src/components/App.js**

```javascript
import React from "react";

const App = ({ data }) => {
  return (
    <div>
      <h1>Server-Side Rendered React</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
```

### Step 4: Create the Server

Set up an Express server to handle requests and render the React component.

**server.js**

```javascript
const express = require("express");
const path = require("path");
const fs = require("fs");
const React = require("react");
const { renderToString } = require("react-dom/server");
require("babel-register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const App = require("./src/components/App").default;

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const data = { message: "Hello from the server!" };
  const appString = renderToString(<App data={data} />);

  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with React</title>
      </head>
      <body>
        <div id="root">${appString}</div>
        <script>
          window.__INITIAL_DATA__ = ${JSON.stringify(data)}
        </script>
        <script src="/client.js"></script>
      </body>
    </html>
  `;

  res.send(htmlTemplate);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
```

### Step 5: Create the Client-Side JavaScript

This script will be responsible for hydrating the server-rendered HTML on the client-side.

**src/client.js**

```javascript
import React from "react";
import { hydrate } from "react-dom";
import App from "./components/App";

hydrate(
  <App data={window.__INITIAL_DATA__} />,
  document.getElementById("root")
);
```

### Step 6: Bundle the Client-Side Code

Since we need to serve the client-side JavaScript, we should bundle it using a tool like Webpack. First, install Webpack and its dependencies:

```bash
npm install --save-dev webpack webpack-cli babel-loader
```

Then, create a Webpack configuration file:

**webpack.config.js**

```javascript
const path = require("path");

module.exports = {
  entry: "./src/client.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "client.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
```

### Step 7: Build and Run the Application

Add scripts to your `package.json` to build the client-side code and run the server:

**package.json**

```json
"scripts": {
  "build": "webpack",
  "start": "node server.js"
}
```

Now, build the client-side code and start the server:

```bash
npm run build
npm start
```

### Explanation

1. **Server Setup**: An Express server handles incoming requests and renders the React component to a string using `renderToString`.
2. **Component Rendering**: The React component (`App`) is rendered on the server with initial data.
3. **HTML Template**: The server sends an HTML template with the rendered component and initial data.
4. **Client Hydration**: On the client-side, the `hydrate` function makes the React components interactive by attaching event listeners to the server-rendered HTML.

This setup provides a basic example of server-side rendering with React and Node.js without using any additional frameworks.
