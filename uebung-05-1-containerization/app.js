// Import the built-in HTTP module from Node.js.
// This keeps the application lightweight and avoids external dependencies.
const http = require("http");

// Use the PORT environment variable if available.
// Otherwise, the application listens on port 3000.
const port = process.env.PORT || 3000;

// Create a minimal HTTP server.
// This represents the containerized web application for the CI/CD exercise.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World from Übung 05.1 Containerization!\n");
});

// Start the server only when this file is executed directly.
// This prevents the server from starting automatically during unit tests.
if (require.main === module) {
  server.listen(port, () => {
    console.log(`Web application running on port ${port}`);
  });
}

// Export the server object so it can be imported by the test script.
module.exports = server;