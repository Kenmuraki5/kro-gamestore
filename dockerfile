FROM node:latest

WORKDIR /app

COPY pnpm-lock.yaml package.json .

RUN npm install -g pnpm

RUN pnpm i 

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"]