FROM node:16 
WORKDIR /app
COPY package*.json /app
RUN npm install -f
# RUN npm update
RUN npm audit fix --force
COPY . /app
EXPOSE 4001

CMD ["npm","start"]
