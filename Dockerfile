# Base image: Node.js on Alpine
FROM node:18-alpine

# Install necessary packages including shadow (for addgroup, adduser)
RUN apk add --no-cache shadow

# Set build arguments for SYSTEM_USER_UID and SYSTEM_GROUP_GID
ARG SYSTEM_USER_UID=1000
ARG SYSTEM_GROUP_GID=1000

# Set the working directory
WORKDIR /app

# Ensure there are no conflicts by deleting the node user and group if they exist
RUN deluser node || true && \
    delgroup node || true && \
    addgroup -g $SYSTEM_GROUP_GID node && \
    adduser -u $SYSTEM_USER_UID -G node -s /bin/sh -D node

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Install NestJS CLI globally as the 'node' user
RUN npm install -g @nestjs/cli

# Copy the application source code
COPY . .

# Build the application
RUN npm run build

# Ensure the app folder and files are owned by 'node'
RUN chown -R node:node /app

# Switch to the 'node' user for non-root execution
USER node
