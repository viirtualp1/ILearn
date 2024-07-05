<template>
  <v-footer class="app-footer"> LAR &copy; {{ currentYear }} </v-footer>
</template>

<script setup lang="ts">
const currentYear = computed(() => {
  return new Date().getFullYear()
})
</script>

<style lang="scss" src="./AppFooter.scss"></style>
