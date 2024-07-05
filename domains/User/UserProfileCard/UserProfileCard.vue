<template>
  <VCard>
    <VCardTitle>{{ userStore.fullName }}</VCardTitle>
    <VCardText>
      {{ userStore.userType }}
    </VCardText>
    <VCardActions>
      <VBtn color="red">
        <template #prepend>
          <VIcon icon="mdi-location-exit" />
        </template>

        Выйти
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
</script>

<style lang="scss" src="./UserProfileCard.scss"></style>
