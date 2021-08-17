FROM node as builder

WORKDIR /usr/src/node

COPY . .

RUN npm update
RUN npm install

EXPOSE 3000
