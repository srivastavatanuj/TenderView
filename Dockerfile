# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory in the container
WORKDIR /tenderview

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json /tenderview/

# Install project dependencies

RUN npm install

# Copy the rest of the application code
COPY . /tenderview/

# Expose the port on which your React app runs (default is 3000)
EXPOSE 3000

# Command to run your React app
CMD ["npm", "run","dev"]