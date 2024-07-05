<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { AppHeader, AppFooter } from '@/domains/App'
</script>
