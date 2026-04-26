import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import ChecklistEnhancer from './ChecklistEnhancer.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(ChecklistEnhancer)
  }
}
