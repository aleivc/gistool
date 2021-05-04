FROM node:alpine
RUN mkdir -p /usr/src/aleivc/gistool
WORKDIR /usr/src/aleivc/gistool
COPY . .
RUN npm i
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
