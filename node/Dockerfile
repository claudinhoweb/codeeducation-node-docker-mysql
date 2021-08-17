FROM node:16 as Builder

WORKDIR /usr/src/node

RUN apt-get update && apt-get install -y wget

COPY . .

RUN npm install

EXPOSE 3000

CMD ["./entrypoint.sh"]
