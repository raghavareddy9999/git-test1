FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle the source code inside the Docker image
COPY . .

# Make port 3000 available outside this container
EXPOSE 3008

# Define the command to run the app
CMD [ "npm", "start" ]
