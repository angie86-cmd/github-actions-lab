# Use a lightweight Node.js image based on Alpine Linux.
# This keeps the container image small and suitable for CI/CD exercises.
FROM node:22-alpine

# Define the working directory inside the container.
WORKDIR /app

# Copy package metadata first.
# This allows Docker to cache dependency installation separately from application code.
COPY package.json ./

# Install application dependencies.
# This example has no external dependencies, but the step represents a realistic Node.js workflow.
RUN npm install

# Copy the application source code and unit test into the container image.
COPY app.js ./
COPY test.js ./

# Document the application port used inside the container.
EXPOSE 3000

# Start the web application when the container runs.
CMD ["npm", "start"]