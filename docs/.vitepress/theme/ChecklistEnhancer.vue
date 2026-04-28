<script setup>
import { nextTick, onMounted, onUpdated, watch } from 'vue'
import { useRoute } from 'vitepress'
import { initChecklists } from './checklists'

const route = useRoute()

const runChecklistInit = async () => {
  await nextTick()
  setTimeout(() => {
    if (typeof initChecklists === 'function') {
      initChecklists()
    }
  }, 100)
}

onMounted(runChecklistInit)
onUpdated(runChecklistInit)

watch(() => route.path, runChecklistInit)
</script>

<template>
  </template>
