import DefaultTheme from 'vitepress/theme'
import { h, ref, nextTick, provide } from 'vue'
import ChecklistEnhancer from './ChecklistEnhancer.vue'
import SocialGrid from './SocialGrid.vue'
import './custom.css'

const isOpen = ref(false)

export default {
  extends: DefaultTheme,
  setup() {
    provide('toggle-appearance', async ({ clientX: x, clientY: y }) => {
      if (!document.startViewTransition) {
        return
      }

      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${Math.hypot(
          Math.max(x, innerWidth - x),
          Math.max(y, innerHeight - y)
        )}px at ${x}px ${y}px)`
      ]

      const transition = document.startViewTransition(async () => {
        document.documentElement.classList.toggle('dark')
        await nextTick()
      })

      transition.ready.then(() => {
        const isDark = document.documentElement.classList.contains('dark')
        document.documentElement.animate(
          {
            clipPath: isDark ? clipPath.reverse() : clipPath
          },
          {
            duration: 150, 
            easing: 'linear',
            pseudoElement: isDark
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)'
          }
        )
      })
    })
  },

  enhanceApp({ app }) {
    app.component('ChecklistEnhancer', ChecklistEnhancer)
    app.component('SocialGrid', SocialGrid)
  },

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ChecklistEnhancer),
      'home-hero-image': () => h(SocialGrid), 
      'sidebar-nav-after': () => {
        return h('div', { class: 'sidebar-custom-container' }, [
          h('div', { 
            class: ['sidebar-custom-trigger', { active: isOpen.value }],
            onClick: (e) => {
              e.stopPropagation()
              isOpen.value = !isOpen.value
            }
          }, [
            h('span', { class: 'trigger-text' }, 'Общая информация'),
            h('span', { class: 'vpi-chevron-right arrow-icon' })
          ]),
          isOpen.value ? h('div', { class: 'sidebar-custom-content' }, [
            h('a', { href: '/Social-media-security-guide/about', class: 'custom-link' }, 'О проекте'),
            h('a', { href: '/Social-media-security-guide/guide', class: 'custom-link' }, 'Инструкция по использованию')
          ]) : null
        ])
      }
    })
  }
}
