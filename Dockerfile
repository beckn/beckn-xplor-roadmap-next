# Stage 1: Building the code
FROM node:14 
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Run the application
CMD ["npm", "start"]
# EXPOSE 1078