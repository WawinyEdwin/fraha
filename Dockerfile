# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

RUN yarn install 

# test the application
# RUN yarn run test 

# RUN yarn run test:e2e 


# Build the application
RUN yarn build 

# Expose port 8080 for the application
EXPOSE 8080

WORKDIR /app

# Start the application
CMD ["yarn", "run" ,"start:prod"]