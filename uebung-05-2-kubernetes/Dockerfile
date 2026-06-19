# Use a lightweight Node.js image based on Alpine Linux.
# This provides Node.js and npm while keeping the container image small.
FROM node:22-alpine

# Define the working directory inside the container.
WORKDIR /app

# Copy package metadata first.
# This allows Docker to cache dependency installation separately from application code.
COPY package.json ./

# Install application dependencies.
# This example does not require external dependencies, but npm install keeps the workflow realistic.
RUN npm install

# Copy the application source code into the container image.
COPY app.js ./

# Document the port used by the application inside the container.
EXPOSE 3000

# Start the web application when the container runs.
CMD ["npm", "start"]