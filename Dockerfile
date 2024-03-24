FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle your app's source code inside the Docker image
COPY . .

# Expose the port your app runs on
EXPOSE 8001

# Command to run your app using npm
CMD ["npm", "start"]
