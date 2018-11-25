FROM node:10.8-slim

COPY ["./package.json", "/app/"]
WORKDIR /app

RUN npm i
COPY . /app

EXPOSE 3000 8888
CMD ["npm", "start"]
