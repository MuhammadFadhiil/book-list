FROM node:14-alpine

WORKDIR /app

COPY . .


#conn

RUN npm install
RUN npm run build
RUN npm install pm2 -g

EXPOSE 3000
CMD ["node", "dist/main.js"]

