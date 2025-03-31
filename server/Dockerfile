FROM node:22 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev

FROM node:22
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
RUN npm rebuild bcrypt --build-from-source # Rebuild bcrypt in the final image

ENV PORT=3000
EXPOSE 3000
CMD ["node", "src/index.js"]