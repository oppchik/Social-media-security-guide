import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Мой новый сайт",
  description: "Тестовый проект на VitePress",
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' }
    ],
    sidebar: [
      {
        text: 'Меню',
        items: [
          { text: 'Главная страница', link: '/' }
        ]
      }
    ]
  }
})
