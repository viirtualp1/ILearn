<template>
  <VCard class="news-card" subtitle="Никита Зинин" :title="title">
    <VCardText> {{ text }}</VCardText>
  </VCard>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()
</script>

<style lang="scss" src="./NewsCard.scss"></style>
