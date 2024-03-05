# Dockerfile

FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Installation de l'utilitaire wait-for-it
RUN apt-get update && apt-get install -y wait-for-it

COPY . .

EXPOSE 3000

# Utilisation de wait-for-it avant de démarrer l'application
CMD ["wait-for-it", "postgres:5432", "--", "node", "src/app.js"]
