# Use a lightweight Node.js image based on Alpine Linux.
# This keeps the container image small while still providing Node.js.
FROM node:22-alpine

# Define the working directory inside the container.
# All following commands will be executed from this directory.
WORKDIR /app

# Copy the package.json file first.
# This allows Docker to cache dependency installation separately from application code.
COPY package.json ./

# Install project dependencies.
# This project has no external dependencies, but npm install keeps the workflow realistic.
RUN npm install

# Copy the application and test files into the container image.
COPY app.js ./
COPY test.js ./

# Expose the application port.
# This documents that the application listens on port 3000.
EXPOSE 3000

# Define the default command used when the container starts.
CMD ["npm", "start"]