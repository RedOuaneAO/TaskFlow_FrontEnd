FROM node:18.15.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN  ng build --configuration=production 

FROM nginx:latest

COPY --from=build app/dist/task-flow-frontend/browser  /usr/share/nginx/html

EXPOSE 80