<script setup>
import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted, onUpdated } from 'vue'
import { useRoute } from 'vitepress'
import { initChecklists } from './checklists'

const { Layout } = DefaultTheme
const route = useRoute()

const runChecklistInit = async () => {
  await nextTick()
  initChecklists()
}

onMounted(runChecklistInit)
onUpdated(runChecklistInit)
</script>

<template>
  <Layout :key="route.path" />
</template>
