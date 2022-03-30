FROM node:13.8.0

WORKDIR /app

COPY package.json .
RUN npm install

COPY . /app

CMD ["npm", "run", "start"]