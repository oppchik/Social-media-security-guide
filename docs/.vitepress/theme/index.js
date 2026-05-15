import DefaultTheme from 'vitepress/theme'
import { h, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import ChecklistEnhancer from './ChecklistEnhancer.vue'
import SocialGrid from './SocialGrid.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ChecklistEnhancer', ChecklistEnhancer)
    app.component('SocialGrid', SocialGrid)
  },

  setup() {
    const route = useRoute()
    
    const initZoom = () => {
      mediumZoom('.flip-back img', {
        background: 'rgba(0, 0, 0, 0.9)', 
        margin: 20                        
      })
    }

    onMounted(() => initZoom())
    watch(() => route.path, () => nextTick(() => initZoom()))
  },

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ChecklistEnhancer),
      'home-hero-image': () => h(SocialGrid), 
    })
  }
}
