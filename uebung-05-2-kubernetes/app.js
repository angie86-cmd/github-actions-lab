// Import the built-in HTTP module from Node.js.
// This keeps the web application lightweight and avoids external dependencies.
const http = require("http");

// Use the PORT environment variable if available.
// Otherwise, the application listens on port 3000.
const port = process.env.PORT || 3000;

// Create a minimal HTTP server.
// This application is used as a simple Hello World example for Docker and Kubernetes.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World from Kubernetes Übung 05.2!\n");
});

// Start the web server.
server.listen(port, () => {
  console.log(`Web application running on port ${port}`);
});