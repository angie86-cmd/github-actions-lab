// Import the application server from app.js.
// This minimal unit test verifies that the application module can be loaded.
const server = require("./app");

// If the server object is missing, the test fails.
if (!server) {
  throw new Error("Application server module could not be loaded.");
}

// If the server object exists, the test is successful.
console.log("Unit test passed: application server module loaded successfully.");