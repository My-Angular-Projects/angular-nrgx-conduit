# Angular Ngrx Real World App

> Явное всегда лучше неаявного

- [conduit](https://angular-realworld.netlify.app/)
- [Deprecate the RootState generic of createFeatureSelector](https://github.com/ngrx/platform/issues/3179)
- [Git. Руководство по оформлению веток и коммитов](https://habr.com/ru/articles/820547/)
- [Angular NgRx - How to use Feature Creator](https://youtu.be/bHw8SV4SNUU?si=L-ef1xOoP-pIpEim)

### Тип ветки, который ставится в начале ее названия:

- `build: изменения, касающиеся процесса сборки(npm, vite);`
- `chore: изменения, не касающиеся кода напрямую, то что не увидит конечный пользователь(установка/удаление зависимостей, настройка проекта/инструментов);`
- `ci: изменения, касающиеся CI/CD;`
- `docs: изменения, касающиеся документации;`
- `feat: новая фича;`
- `fix: баг-фикс;`
- `perf: изменения, касающиеся улучшения производительности;`
- `refactor: изменения, не относящиеся ни к новой фиче, ни к фиксу бага;`
- `revert: отмена коммита;`
- `style: изменения, относящиеся к стилизации, форматированию;`
- `test: добавление недостающих тестов или корректирование уже существующих тестов.`

Примеры правильного именования веток:

- `feat/DEV-666-add-custom-input`
- `fix/DEV-1125-issue-with-user-avatar-dimensions`
- `chore/DEV-25-upgrade-vite-version`
- `style/add-outline-to-primary-button`

### Формирование сообщения коммита

- `<type>: <short description>`

Для начала посмотрите на типы, которые мы с вами ввели для именования веток и проведите анализ кода, который хотите закоммитить.
Каждый коммит должен содержать законченный, логически связанный код (исключением являются WIP-коммиты, об этом поговорим чуть позже).
То есть если вы привыкли просто бездумно выполнять команду `git add .`, тем самым добавляя в коммит все что сделали в процессе работы, то сейчас самое время пересмотреть это действие.

- `feat: add booking widget to product page`
- `refactor: remove info button in tariff card`
- `ci: update CI/CD for performance reason`

Если вы хотите развернуто описать проделанную работу, то создайте большое сообщение для коммита с заголовком, телом сообщения и подвалом (опционально).
В этом вам поможет команда `git commit`, которая открывает встроенный в оболочку командной строки редактор кода (vim, nano и т.д.).
Вы также можете воспользоваться GUI-вариантом в вашей IDE:

```
# HEADING
feat: add button for loading new posts

# BODY
Add a button for loading new posts on blog page. It can be hidden if there're no more info and shown if it exists.

There is a small delay on button hidding(maybe it's a problem with rerendering), so it needs to be fixed on future refactoring.

# FOOTER(optional)
Signed-of-by: John Doe
Issue: DEV-123
```
