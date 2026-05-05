import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/Social-media-security-guide/',
  lang: 'ru-RU',
  title: 'Безопасность аккаунтов',
  description: 'Практические рекомендации по защите учетных записей в социальных сетях',
  appearance: 'dark', 
  cleanUrls: true,
  head: [['meta', { name: 'theme-color', content: '#0d5c63' }]],
  themeConfig: {
    logo: '/shield.svg',
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'О проекте', link: '/about' },
    ],
    sidebar: [
      {
        text: 'Общие рекомендации',
        items: [
          { text: 'Что вы найдете на сайте', link: '/page' }, 
          { text: 'Почему важна защита аккаунтов', link: '/importance' },
          { text: 'Общие рекомендации по безопасности', link: '/general-security' },
          { text: 'Типичные ошибки пользователей', link: '/mistakes' },
        ]
      },
      {
        text: 'Безопасность в соцсетях',
        items: [
          { text: 'Безопасность аккаунта ВКонтакте', link: '/vk-security' },
          { text: 'Безопасность аккаунта Telegram', link: '/telegram-security' },
          { text: 'Безопасность аккаунта WhatsApp', link: '/whatsapp-security' },
          { text: 'Безопасность аккаунта Discord', link: '/discord-security' },
          { text: 'Безопасность аккаунта MAX', link: '/max-security' },
          { text: 'Безопасность аккаунта Instagram', link: '/instagram-security' },
        ]
      },
      {
        text: 'Инфографика и чек-листы',
        items: [
          { text: 'Интерактивный чек-лист', link: '/checklist' },
          { text: 'Инфографика и памятки', link: '/infographics' }
        ]
      },
      {
        text: 'О проекте',
        items: [
          { text: 'О проекте', link: '/about' },
          { text: 'Испоьзование ресурса', link: '/guide' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск'
          },
          modal: {
            noResultsText: 'Ничего не найдено по запросу',
            resetButtonTitle: 'Сбросить поиск',
            footer: {
              selectText: 'выбрать',
              navigateText: 'навигация',
              closeText: 'закрыть'
            }
          }
        }
      }
    },
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
