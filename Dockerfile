FROM node:18-slim

RUN mkdir /project
WORKDIR /project
RUN ls -l

COPY package*.json ./

RUN npm install

COPY . .
RUN ls -l

EXPOSE 3000

CMD ["npm", "run", "dev"]