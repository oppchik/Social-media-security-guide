# Учебный сайт по безопасности аккаунтов в социальных сетях

Проект представляет собой готовый демонстрационный информационно-образовательный сайт на `VitePress`. Материалы ориентированы на студентов гуманитарных специальностей и обычных пользователей и посвящены практической защите аккаунтов в социальных сетях и персональных данных.

## Стек

![VitePress](https://img.shields.io/badge/VitePress-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)

## 🚀 Запуск проекта

1. Установите зависимости:

```bash
npm install
```

2. Запустите локальный сервер разработки:

```bash
npm run docs:dev
```

3. Откройте адрес, который покажет `VitePress` в терминале. Обычно это `http://localhost:5173`.

## Сборка

```bash
npm run docs:build
```

Для локального просмотра собранной версии:

```bash
npm run docs:preview
```

## 📂 Структура проекта

```text
project/
├─ docs/
│  ├─ public/
│  ├─ .vitepress/
│  │  ├─ config.mts
│  │  └─ theme/
│  │     ├─ ChecklistEnhancer.vue
│  │     ├─ checklists.js
│  │     ├─ custom.css
│  │     └─ index.js
│  ├─ about.md
│  ├─ checklist.md
│  ├─ discord-security.md
│  ├─ general-security.md
│  ├─ guide.md
│  ├─ importance.md
│  ├─ index.md
│  ├─ infographics.md
│  ├─ mistakes.md
│  ├─ telegram-security.md
│  ├─ vk-security.md
│  ├─ whatsapp-security.md
│  ├─ max-security.md
│  └─ instagram-security.md
├─ package.json
└─ README.md
```

## 📝 Как редактировать контент

- Основные тексты страниц находятся в папке `docs/`.
- Каждая страница сайта редактируется как отдельный Markdown-файл.
- Навигация верхнего меню и боковой панели настраивается в `docs/.vitepress/config.mts`.
- Визуальный стиль сайта изменяется в `docs/.vitepress/theme/custom.css`.
- Логика интерактивного чек-листа находится в `docs/.vitepress/theme/checklists.js`.

## 🛠️ Как добавить новую страницу

1. Создайте новый Markdown-файл в папке `docs/`, например `new-page.md`.
2. Добавьте заголовок, текст и нужные HTML-блоки в формате Markdown.
3. Добавьте страницу в `nav` и `sidebar` внутри `docs/.vitepress/config.mts`.
4. При необходимости расширьте стили в `docs/.vitepress/theme/custom.css`.
