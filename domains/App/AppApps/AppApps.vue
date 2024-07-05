<template>
  <div class="app-apps">
    <AppLink
      v-for="(app, appIdx) in apps"
      :key="appIdx"
      :name="app.name"
      :icon="app.icon"
      :link="app.link"
    />
  </div>
</template>

<script setup lang="ts">
import { AppLink } from './AppLink'

const apps = computed(() => [
  {
    name: 'LAR Tests',
    description: 'Создавайте тесты для учеников',
    icon: 'mdi-magnify',
    link: '/tests',
  },
  {
    name: 'LAR Chat',
    description: 'Общайтесь с учениками',
    icon: 'mdi-message-outline',
    link: '/chat',
  },
])
</script>

<style lang="scss" src="./AppApps.scss"></style>
