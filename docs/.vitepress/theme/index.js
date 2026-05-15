import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import ChecklistEnhancer from './ChecklistEnhancer.vue'
import SocialGrid from './SocialGrid.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ChecklistEnhancer', ChecklistEnhancer)
    app.component('SocialGrid', SocialGrid)
  },

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ChecklistEnhancer),
      'home-hero-image': () => h(SocialGrid), 
    })
  }
}
