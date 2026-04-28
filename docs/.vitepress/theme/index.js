import DefaultTheme from 'vitepress/theme'
import { h, ref } from 'vue'
import ChecklistEnhancer from './ChecklistEnhancer.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ChecklistEnhancer),

      'sidebar-nav-after': () => {
        const isOpen = ref(false)

        return h('div', { class: 'sidebar-custom-container' }, [
          h('div', { 
            class: ['sidebar-custom-trigger', { active: isOpen.value }],
            onClick: () => isOpen.value = !isOpen.value 
          }, [
            h('span', 'Общая информация'), 
            h('span', { class: 'vpi-chevron-right arrow-icon' }) 
          ]),

          isOpen.value ? h('div', { class: 'sidebar-custom-content' }, [
            h('a', { 
              href: '/Social-media-security-guide/about', 
              class: 'custom-link' 
            }, 'О проекте'),
            h('a', { 
              href: '/Social-media-security-guide/about#инструкция-по-использованию-ресурса', 
              class: 'custom-link' 
            }, 'Инструкция по использованию')
          ]) : null
        ])
      }
    })
  }
}
