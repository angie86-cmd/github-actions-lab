// Import the application server from app.js.
// This is a minimal test to verify that the application module can be loaded.
const server = require("./app");

// Check whether the server object was successfully imported.
// If not, the test fails by throwing an error.
if (!server) {
  throw new Error("Server module could not be loaded.");
}

// If the server object exists, the test is considered successful.
console.log("Unit test passed: server module loaded successfully.");