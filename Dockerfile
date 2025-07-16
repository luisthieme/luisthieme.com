FROM node:20

WORKDIR /src

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "start"]
