# Dockerfile for React client

# Build react client
FROM node:alpine

# Working directory be app
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install



COPY . .

EXPOSE 3001

CMD ["npm", "run", "server"]
