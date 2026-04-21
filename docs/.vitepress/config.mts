import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/Social-media-security-guide/',
  lang: 'ru-RU',
  title: 'Безопасность аккаунтов',
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
