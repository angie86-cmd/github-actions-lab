// Import the built-in HTTP module from Node.js.
// This module allows us to create a simple web server without external dependencies.
const http = require("http");

// Define the application port.
// If the PORT environment variable is set, it will be used.
// Otherwise, the application runs on port 3000 by default.
const port = process.env.PORT || 3000;

// Create a minimal HTTP server.
// For every incoming request, the server returns a simple text response.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from the CI/CD web application!\n");
});

// Start the server only when this file is executed directly.
// This prevents the server from starting automatically when imported by tests.
if (require.main === module) {
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Export the server object so it can be loaded and validated by the test script.
module.exports = server;