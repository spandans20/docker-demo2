FROM node
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3003
CMD npm start
