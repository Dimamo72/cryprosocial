#!/bin/bash

# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка необходимых пакетов
sudo apt install -y docker.io docker-compose nginx certbot python3-certbot-nginx

# Создание директорий для сертификатов
sudo mkdir -p certbot/conf
sudo mkdir -p certbot/data

# Остановка существующих контейнеров
docker-compose -f docker-compose.prod.yml down

# Сборка и запуск контейнеров
docker-compose -f docker-compose.prod.yml up -d --build

# Ожидание запуска Nginx
sleep 10

# Получение SSL сертификата
sudo certbot --nginx -d morevis.ru -d www.morevis.ru --non-interactive --agree-tos -m modima@morevis.ru

# Перезапуск Nginx для применения SSL
docker-compose -f docker-compose.prod.yml restart nginx

echo "Деплой завершен!" 