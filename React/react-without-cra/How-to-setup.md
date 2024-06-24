Sure! Setting up a React application from scratch involves several steps. You'll need to manually configure your project with the necessary dependencies and tools. Here's a step-by-step guide to help you create your own React setup without using Create React App (CRA).

### Step 1: Set Up the Project Directory

1. **Create a project directory**:

   ```bash
   mkdir my-react-app
   cd my-react-app
   ```

2. **Initialize npm**:
   ```bash
   npm init -y
   ```

### Step 2: Install Dependencies

1. **Install React and ReactDOM**:

   ```bash
   npm install react react-dom
   ```

2. **Install Webpack and Webpack CLI**:

   ```bash
   npm install --save-dev webpack webpack-cli
   ```

3. **Install Babel**:

   ```bash
   npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
   ```

4. **Install Webpack Dev Server**:
   ```bash
   npm install --save-dev webpack-dev-server
   ```

### Step 3: Configure Babel

Create a `.babelrc` file in the root of your project with the following content:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### Step 4: Configure Webpack

Create a `webpack.config.js` file in the root of your project with the following content:

```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  mode: "development",
};
```

### Step 5: Set Up the Project Structure

Create the following directory and file structure:

```
my-react-app/
  ├── dist/
  │   └── index.html
  ├── src/
  │   ├── index.js
  │   ├── App.js
  │   └── App.css
  ├── .babelrc
  ├── package.json
  └── webpack.config.js
```

### Step 6: Create the HTML File

Create an `index.html` file in the `dist` directory:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

### Step 7: Create the React Components

1. **Create `src/index.js`**:

   ```javascript
   import React from "react";
   import ReactDOM from "react-dom";
   import App from "./App";
   import "./App.css";

   ReactDOM.render(<App />, document.getElementById("root"));
   ```

2. **Create `src/App.js`**:

   ```javascript
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
   ```

3. **Create `src/App.css`**:

   ```css
   .App {
     font-family: Arial, sans-serif;
     background-color: #f0f0f0;
     margin: 0;
     padding: 20px;
   }

   h1 {
     color: #333;
   }

   button {
     background-color: #007bff;
     color: #fff;
     border: none;
     padding: 10px 20px;
     cursor: pointer;
   }

   button:hover {
     background-color: #0056b3;
   }
   ```

### Step 8: Add Scripts to package.json

Add the following scripts to your `package.json` file:

```json
"scripts": {
  "start": "webpack serve --open",
  "build": "webpack"
}
```

### Step 9: Run the Development Server

Start the development server with:

```bash
npm start
```

This will open your React app in the browser at `http://localhost:9000`.

### Summary

1. **Set up project directory**: Initialize npm and create the necessary files and directories.
2. **Install dependencies**: React, ReactDOM, Webpack, Babel, and Webpack Dev Server.
3. **Configure Babel**: Set up presets for transforming modern JavaScript and JSX.
4. **Configure Webpack**: Set up entry, output, module rules, and dev server.
5. **Create project structure**: Organize your project files.
6. **Create HTML file**: Set up the main HTML file to include the bundled script.
7. **Create React components**: Write your React components and styles.
8. **Add scripts**: Set up npm scripts for development and production builds.
9. **Run the development server**: Start your React app.

This setup gives you a foundational understanding of how a React application is built and configured from scratch.

The error you're encountering is because Webpack Dev Server's configuration has changed in recent versions. The `contentBase` property has been replaced with `static`. Here’s how you can update your Webpack configuration to match the new API schema.

### Updated Webpack Configuration

Replace `contentBase` with `static` in your `webpack.config.js`:

```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
  mode: "development",
};
```

### Step-by-Step Fix

1. **Update the `devServer` configuration**:
   - Change `contentBase` to `static.directory`.

### Updated Configuration File

Here's the complete `webpack.config.js` file with the corrected property:

```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
  mode: "development",
};
```

### Verify the Project Structure

Ensure that your project structure is still as follows:

```
my-react-app/
  ├── dist/
  │   └── index.html
  ├── src/
  │   ├── index.js
  │   ├── App.js
  │   └── App.css
  ├── .babelrc
  ├── package.json
  └── webpack.config.js
```

### Re-run the Development Server

After making these changes, start the development server again:

```bash
npm start
```

This should resolve the issue and correctly start the Webpack Dev Server. If there are any additional errors, please let me know!

It looks like `style-loader` and `css-loader` are not installed. You need to install these loaders to process CSS files.

### Step-by-Step Solution

1. **Install the Required Loaders**

Run the following command to install `style-loader` and `css-loader`:

```bash
npm install --save-dev style-loader css-loader
```

2. **Verify the Project Structure and Configuration**

Ensure your `webpack.config.js` is correctly configured to use these loaders. Here is the complete configuration again for reference:

```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
  mode: "development",
};
```

3. **Verify Directory Structure**

Ensure the directory structure is correct:

```
my-react-app/
  ├── dist/
  │   └── index.html
  ├── src/
  │   ├── index.js
  │   ├── App.js
  │   └── App.css
  ├── .babelrc
  ├── package.json
  └── webpack.config.js
```

### Running the Development Server

Once the loaders are installed and the configuration is verified, you can start the development server:

```bash
npm start
```

This should now work without errors. If you encounter any additional issues, feel free to ask!
