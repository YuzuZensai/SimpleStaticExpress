FROM node
WORKDIR /home/node/app

COPY . .
RUN yarn

CMD [ "node", "index.js"]