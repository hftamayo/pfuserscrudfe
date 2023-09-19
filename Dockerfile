# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
RUN mkdir /opt/userscrud
RUN mkdir /opt/userscrud/fe
WORKDIR /opt/userscrud/fe

# Copy package.json and package-lock.json to the container
COPY package*.json yarn.lock ./

# Install app dependencies
RUN yarn install

# Copy the rest of the application source code to the container
COPY . .

# Expose the port your application is running on
EXPOSE 3001

# Start your application
CMD ["yarn", "dev"]

