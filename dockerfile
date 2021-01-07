FROM node:10 as builder
WORKDIR /app
ADD . ./
RUN npm install
RUN npm run serve:prod