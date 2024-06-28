In a React app, keeping sensitive information such as API keys or other secrets out of the client-side code is crucial for security. Here are some strategies you can use to achieve this:

### 1. **Environment Variables**

Use environment variables to store sensitive information. These can be injected into your build process and are not included in the client-side code. However, note that while this method keeps keys out of the source code, it does not protect them from being exposed in the client-side application, as the variables will still be accessible in the built JavaScript bundle.

- Create a `.env` file in the root of your project:
  ```env
  REACT_APP_API_KEY=your_api_key
  ```
- Access the variables in your code:
  ```javascript
  const apiKey = process.env.REACT_APP_API_KEY;
  ```

### 2. **Server-Side Proxy**

A more secure way to handle sensitive data is to create a backend server that proxies requests. This way, the client-side code never directly interacts with the API key or other sensitive information.

- **Set up a backend server** (using Node.js, Express, or any other framework).
- **Store your keys and sensitive information** on the server.
- **Create API endpoints** on your backend to handle requests from your React app.
- **Make requests** from your React app to your backend server instead of directly to third-party services.

Example of setting up an Express server:

```javascript
// server.js
const express = require("express");
const app = express();
const axios = require("axios");

const API_KEY = "your_api_key";

app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get(
      `https://thirdpartyapi.com/data?api_key=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
```

In your React app, you would call the backend API:

```javascript
fetch("/api/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

### 3. **Use a Cloud Function or Serverless Architecture**

Another approach is to use cloud functions or serverless architecture provided by services like AWS Lambda, Google Cloud Functions, or Azure Functions to securely handle API requests.

- **Create a cloud function** that performs the API request using your secret key.
- **Call the cloud function** from your React app.

Example of an AWS Lambda function:

```javascript
// index.js (AWS Lambda function)
const axios = require("axios");

exports.handler = async (event) => {
  const API_KEY = "your_api_key";
  const response = await axios.get(
    `https://thirdpartyapi.com/data?api_key=${API_KEY}`
  );
  return {
    statusCode: 200,
    body: JSON.stringify(response.data),
  };
};
```

### 4. **Use Secure Storage Solutions**

For storing sensitive information on the server side, consider using secure storage solutions such as AWS Secrets Manager, Google Secret Manager, or HashiCorp Vault.

### Summary

- Use environment variables for less critical secrets but remember they are still included in the built bundle.
- Prefer server-side proxies to handle sensitive data and interact with third-party services.
- Use cloud functions or serverless architectures for an extra layer of security.
- Employ secure storage solutions for managing sensitive information on the server side.

By implementing these practices, you can ensure that sensitive information remains secure and is not exposed to the client-side environment.

If you must use secrets directly in the frontend and cannot rely on a backend server, you face significant security challenges. Browsers are inherently insecure environments for storing secrets because any data accessible to your JavaScript code can potentially be exposed to users.

However, you can mitigate risks through the following practices, though none will provide complete security:

### 1. **Obfuscation**

While obfuscation is not a security measure, it can deter casual snooping. Tools like [webpack-obfuscator](https://github.com/javascript-obfuscator/webpack-obfuscator) can make it harder for someone to understand your code.

```javascript
const obfuscator = require("webpack-obfuscator");

module.exports = {
  // ... other config settings ...
  plugins: [
    new obfuscator(
      {
        rotateStringArray: true,
      },
      []
    ),
  ],
};
```

### 2. **Environment Variables with Build-time Replacement**

Environment variables are useful for build-time configuration but are not secure once the app is running in the browser. Nevertheless, this method keeps secrets out of your source code repository.

- **Define environment variables** in a `.env` file:

  ```env
  REACT_APP_SECRET=your_secret
  ```

- **Access them in your React code**:
  ```javascript
  const secret = process.env.REACT_APP_SECRET;
  ```

### 3. **Content Security Policy (CSP)**

Using a strong CSP can help protect against certain types of attacks such as Cross-Site Scripting (XSS).

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self'"
/>
```

### 4. **Use Web Workers**

Web Workers run scripts in background threads and can isolate certain operations from the main thread. This doesn't hide your secrets, but it can help isolate them from some types of attacks.

```javascript
// worker.js
self.onmessage = function (e) {
  const secret = "your_secret";
  // Perform operations with the secret
  postMessage(result);
};

// main.js
const worker = new Worker("worker.js");
worker.onmessage = function (e) {
  console.log("Worker result:", e.data);
};
worker.postMessage("start");
```

### 5. **Token-Based Authentication**

Instead of storing sensitive secrets, use temporary, revocable tokens for accessing APIs. These tokens can be refreshed periodically and are safer than long-lived secrets.

- **Issue tokens** from a secure server (using OAuth, for example).
- **Store tokens** in memory or short-lived storage (like session storage).

### 6. **Encrypted Storage**

Use Web Crypto API for storing secrets encrypted in localStorage or sessionStorage. However, this still requires handling decryption keys securely.

```javascript
async function encrypt(data, password) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );
  const aesKey = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: enc.encode("salt"),
      iterations: 100000,
      hash: "SHA-256",
    },
    key,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"]
  );
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    aesKey,
    enc.encode(data)
  );
  return { iv, encrypted };
}

async function decrypt(encrypted, iv, password) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );
  const aesKey = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: enc.encode("salt"),
      iterations: 100000,
      hash: "SHA-256",
    },
    key,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    aesKey,
    encrypted
  );
  return new TextDecoder().decode(decrypted);
}
```

### 7. **Secure Contexts**

Ensure your app is served over HTTPS to prevent man-in-the-middle attacks and other security vulnerabilities.

### Conclusion

While these strategies can help reduce risks, none can fully secure secrets in a client-side application. The best practice is to always handle sensitive information on the server side whenever possible. If you must store secrets in the frontend, combine several of the above strategies to increase security and make it harder for attackers to access your data.
