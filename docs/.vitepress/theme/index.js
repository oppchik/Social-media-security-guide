import DefaultTheme from 'vitepress/theme'
import { h, ref, nextTick, provide } from 'vue'
import ChecklistEnhancer from './ChecklistEnhancer.vue'
import SocialGrid from './SocialGrid.vue'
import './custom.css'

const isOpen = ref(false)

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ChecklistEnhancer', ChecklistEnhancer)
    app.component('SocialGrid', SocialGrid)

     app.mixin({
      mounted() {
        if (window.appearanceLogicLoaded) return
        window.appearanceLogicLoaded = true

        provide('toggle-appearance', async ({ clientX: x, clientY: y }) => {
          const isDark = app.config.globalProperties.$vitepress.isDark

          if (!document.startViewTransition) {
            isDark.value = !isDark.value
            return
          }

          const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`
          ]

          const transition = document.startViewTransition(async () => {
            isDark.value = !isDark.value
            await nextTick()
          })

          transition.ready.then(() => {
            document.documentElement.animate(
              { clipPath: isDark.value ? clipPath.reverse() : clipPath },
              {
                duration: 400,
                easing: 'ease-in',
                pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
              }
            )
          })
        })
      }
    })
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
              e.stopPropagation();
              isOpen.value = !isOpen.value;
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
