# 1. Используем базовый образ Node.js
FROM node:18 AS build

# 2. Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# 3. Копируем package.json и package-lock.json
COPY /app/package.json /app/package-lock.json ./

# 4. Устанавливаем зависимости
RUN npm install

# 5. Копируем весь проект в контейнер

COPY /app /app

# 6. Запускаем сборку проекта
RUN npm run build

# 7. Используем Nginx для сервировки статических файлов
FROM nginx:1.25-alpine

# 8. Копируем статические файлы из стадии сборки в Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# 9. Добавляем конфигурацию Nginx (опционально)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 10. Экспонируем порт
EXPOSE 80

# 11. Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]

