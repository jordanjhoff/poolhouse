# thank you chatgpt for docker
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate  # Add this line to generate Prisma client
RUN npm run build
FROM node:20-slim
WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public
EXPOSE 3000
CMD ["npm", "start"]