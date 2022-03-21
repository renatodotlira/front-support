FROM node:alpine AS app-build
WORKDIR /app
RUN npm cache clean --force
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=app-build /app/dist/app-support /usr/share/nginx/html
EXPOSE 4200