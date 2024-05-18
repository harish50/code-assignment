FROM node:latest

WORKDIR /app
COPY . .

RUN npm install

CMD ["make", "run-app"]