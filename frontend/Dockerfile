# Dockerfile for React client

# Build react client
FROM node:alpine

# Working directory be app
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install  --legacy-peer-deps

CHMOD +x /usr/local/bin/docker-entrypoint.sh

COPY . .

EXPOSE 3000

CMD ["npm","start"]
