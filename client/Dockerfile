# Dockerfile for React client

# Build react client
FROM node:alpine

# Working directory be app
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install  --legacy-peer-deps



COPY . .

EXPOSE 3000

CMD ["npm","start"]
