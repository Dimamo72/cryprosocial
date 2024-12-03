# CryptoSocial

Социальная сеть с элементами Web3 технологий.

## Структура проекта

```bash
├── frontend/
│   ├── web/         # Next.js веб-приложение
│   └── mobile/      # React Native мобильное приложение
├── backend/
│   ├── nest/        # NestJS основной API
│   ├── go-services/ # Go микросервисы
│   ├── graphql/     # GraphQL схемы и резолверы
│   └── grpc/        # gRPC протоколы
└── blockchain/
    └── contracts/   # Solidity смарт-контракты

## Технологии

- Frontend: Next.js, React Native, TailwindCSS
- Backend: NestJS, Go, GraphQL, gRPC
- Database: PostgreSQL, Redis
- Blockchain: Solidity, Hardhat
- DevOps: Docker, Nginx

## Установка и запуск

### Требования

- Node.js 18+
- Go 1.19+
- Docker и Docker Compose
- PostgreSQL 14+
- Redis 6+

### Локальная разработка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/yourusername/cryptosocial.git
cd cryptosocial
```

2. Установите зависимости:

```bash
# Frontend
cd frontend/web
npm install
cd ../mobile
npm install

# Backend
cd ../../backend/nest
npm install
```

3. Настройте переменные окружения:

```bash
cp .env.example .env
# Отредактируйте .env файл под свои нужды
```

4. Запустите сервисы через Docker:

```bash
docker-compose up -d
```

5. Запустите миграции базы данных:

```bash
cd backend/nest
npx prisma migrate dev
```

6. Запустите приложение:

```bash
# В разных терминалах:
# Frontend
cd frontend/web
npm run dev

# Backend
cd backend/nest
npm run start:dev

# Go services
cd backend/go-services
go run cmd/api/main.go
```

### Продакшн деплой

Для деплоя в продакшн используйте:

```bash
./deploy.sh
```

## Разработка

### Ветки

- `main` - основная ветка
- `develop` - ветка разработки
- `feature/*` - ветки для новых функций
- `bugfix/*` - ветки для исправления багов
- `release/*` - ветки для релизов

### Коммиты

Используйте conventional commits:
- `feat:` - новая функциональность
- `fix:` - исправление бага
- `docs:` - изменения в документации
- `chore:` - обновление зависимостей и т.п.
- `refactor:` - рефакторинг кода
- `test:` - добавление тестов

## Лицензия

MIT 