# Use the official Node.js image as the base image
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's files
COPY . .

# Build the app for production
RUN npm run build

# Create a production stage to serve the app
FROM node:16-slim

# Set the working directory
WORKDIR /app

# Install dependencies for production (e.g., next.js runtime)
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public

# Expose the port the app runs on
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]