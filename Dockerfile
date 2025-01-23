# Use official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install app dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app's code into the container
COPY . .

# Expose port 6000 (for the Express API)
EXPOSE 5001

# Start the Express app when the container starts
CMD ["node", "server.js"]
