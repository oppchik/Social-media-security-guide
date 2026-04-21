import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/Social-media-security-guide/',
  lang: 'ru-RU',
  title: 'Безопасность аккаунтов',
  description: 'Практические рекомендации по защите учетных записей в социальных сетях',
  cleanUrls: true,
  head: [['meta', { name: 'theme-color', content: '#0d5c63' }]],
  themeConfig: {
    logo: '/shield.svg',
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Рекомендации', link: '/general-security' },
      { text: 'Чек-лист', link: '/checklist' },
      { text: 'Инфографика', link: '/infographics' },
      { text: 'О проекте', link: '/about' }
    ],
    sidebar: [
      {
        text: 'Учебный сайт',
        items: [
          { text: 'Главная', link: '/' },
          { text: 'О проекте', link: '/about' },
          { text: 'Почему важна защита аккаунтов', link: '/importance' },
          { text: 'Общие рекомендации по безопасности', link: '/general-security' },
          { text: 'Безопасность аккаунта ВКонтакте', link: '/vk-security' },
          { text: 'Безопасность аккаунта Telegram', link: '/telegram-security' },
          { text: 'Безопасность аккаунта Instagram', link: '/instagram-security' },
          { text: 'Интерактивный чек-лист', link: '/checklist' },
          { text: 'Инфографика и памятки', link: '/infographics' },
          { text: 'Типичные ошибки пользователей', link: '/mistakes' },
          { text: 'Инструкция по использованию ресурса', link: '/guide' }
        ]
      }
    ],
    search: { provider: 'local' },
    footer: {
      message: 'Учебный демонстрационный ресурс по цифровой грамотности',
      copyright: 'Используйте материалы для профилактики и повышения осведомленности'
    },
    outline: { label: 'На странице' },
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    }
  }
})
