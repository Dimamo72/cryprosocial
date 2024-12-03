# Руководство по внесению изменений

## Процесс разработки

1. Форкните репозиторий
2. Создайте ветку для ваших изменений:
   - Для новых функций: `feature/название-функции`
   - Для исправления багов: `bugfix/название-бага`
   - Для документации: `docs/что-изменяется`

3. Внесите изменения, следуя стандартам кодирования
4. Убедитесь, что все тесты проходят
5. Создайте Pull Request в ветку `develop`

## Стандарты кодирования

### Frontend

- Используйте TypeScript
- Следуйте принципам React Hooks
- Используйте функциональные компоненты
- Придерживайтесь Airbnb Style Guide
- Документируйте компоненты с помощью JSDoc

### Backend

#### NestJS
- Следуйте официальному style guide NestJS
- Используйте декораторы для метаданных
- Документируйте API с помощью Swagger

#### Go
- Следуйте официальному style guide Go
- Используйте `gofmt` для форматирования
- Пишите тесты для всех публичных функций

### Blockchain

- Следуйте Solidity style guide
- Используйте последнюю стабильную версию Solidity
- Все контракты должны быть покрыты тестами

## Коммиты

Используйте conventional commits:

```bash
feat: добавлена авторизация через Web3
^--^  ^-----------------------^
|     |
|     +-> Описание изменений
|
+-------> Тип: feat, fix, docs, style, refactor, test, chore
```

## Тестирование

- Пишите unit-тесты для всей новой функциональности
- Поддерживайте покрытие кода на уровне не менее 80%
- Запускайте все тесты перед созданием PR

## Code Review

- PR должен быть проверен как минимум одним разработчиком
- Все комментарии должны быть обработаны
- CI/CD пайплайн должен проходить успешно

## Документация

- Обновляйте README.md при добавлении новых функций
- Документируйте все публичные API
- Добавляйте комментарии к сложным алгоритмам

## Безопасность

- Не коммитьте секреты и ключи
- Используйте переменные окружения
- Следуйте лучшим практикам безопасности для Web3 