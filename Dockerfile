# Dockerfile  
FROM node:8  
WORKDIR /app  
COPY package.json /app  
RUN npm install  --save-dev
COPY . /app  
EXPOSE 4200  
CMD ["npm", "run", "dev"]