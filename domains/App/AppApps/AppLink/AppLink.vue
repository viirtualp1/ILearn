<template>
  <router-link class="app-link" :to="link">
    <v-card color="indigo" variant="tonal">
      <v-card-text>
        <v-icon :icon="icon" />

        {{ name }}
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  link: string
  icon: string
}>()
</script>

<style lang="scss" src="./AppLink.scss"></style>
