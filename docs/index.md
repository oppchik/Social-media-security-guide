---
layout: home

hero:
  name: "Безопасность аккаунтов"
  tagline: "Практические рекомендации по обеспечению безопасности учетных записей в социальных сетях."
  actions:
    - theme: brand
      text: "Перейти к практическим рекомендациям"
      link: "/page"
    - theme: alt
      text: "О проекте"
      link: "/about"

features:
  - title: Пошаговые рекомендации
    details: Короткие и практичные советы по паролям, 2FA, настройке приватности и проверке активных сессий.
  - title: Отдельные страницы
    details: Разобраны особенности защиты аккаунтов ВКонтакте, Telegram, WhatsApp и Discord.
  - title: Интерактивный чек-лист
    details: Отмечайте выполненные пункты, отслеживайте прогресс и возвращайтесь к списку позже.
---

<template #home-hero-image>
  <SocialGrid/>
</template>

<style>
:deep(.VPHero .container) {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>

<SocialGrid />
