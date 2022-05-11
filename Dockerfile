# Dockerfile  
FROM node:16.15.0  
WORKDIR /bin/server  
COPY package.json /app  
RUN npm install  --save-dev
COPY . /app  
EXPOSE 4200  
CMD ["npm", "run", "dev"]