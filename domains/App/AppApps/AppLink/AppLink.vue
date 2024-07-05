<template>
  <RouterLink class="app-link" :to="link">
    <VCard color="indigo" variant="tonal">
      <VCardText>
        <VIcon :icon="icon" />

        {{ name }}
      </VCardText>
    </VCard>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  link: string
  icon: string
}>()
</script>

<style lang="scss" src="./AppLink.scss"></style>
