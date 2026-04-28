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
      { text: 'О проекте', link: '/about' }
    ],
    sidebar: [
      {
        text: 'Навигация',
        items: [
          { text: 'Главная', link: '/page' }, 
          { text: 'Почему важна защита аккаунтов', link: '/importance' },
          { text: 'Общие рекомендации по безопасности', link: '/general-security' },
          { text: 'Типичные ошибки пользователей', link: '/mistakes' },
          { text: 'Безопасность аккаунта ВКонтакте', link: '/vk-security' },
          { text: 'Безопасность аккаунта Telegram', link: '/telegram-security' },
          { text: 'Безопасность аккаунта WhatsApp', link: '/whatsapp-security' },
          { text: 'Безопасность аккаунта Discord', link: '/discord-security' },
          { text: 'Интерактивный чек-лист', link: '/checklist' },
          { text: 'Инфографика и памятки', link: '/infographics' }
        ]
      }
    ],
    search: { provider: 'local' },
    footer: {
      message: '404TNF<br>Учебный демонстрационный ресурс по цифровой грамотности',
      copyright: 'Используйте материалы для профилактики и повышения осведомленности'
    },
    outline: { label: 'На странице' },
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    }
  }
})
