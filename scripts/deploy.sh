#!/bin/bash

# Проверяем, что мы в правильной ветке
if [ "$(git rev-parse --abbrev-ref HEAD)" != "main" ]; then
    echo "Error: Not on main branch"
    exit 1
fi

# Проверяем, что все изменения закоммичены
if [ -n "$(git status --porcelain)" ]; then
    echo "Error: Uncommitted changes"
    exit 1
fi

# Собираем проект
npm run build

# Копируем файлы на сервер
scp -i /Users/mo/Desktop/modima@89.111.136.69 -r frontend/web/* modima@morevis.ru:~/cryptosocial/frontend/web/
scp -i /Users/mo/Desktop/modima@89.111.136.69 -r backend/nest/* modima@morevis.ru:~/cryptosocial/backend/nest/

# Перезапускаем контейнеры на сервере
ssh -i /Users/mo/Desktop/modima@89.111.136.69 modima@morevis.ru "cd ~/cryptosocial && docker-compose -f docker-compose.prod.yml up -d --build"

echo "Deployment completed!" 