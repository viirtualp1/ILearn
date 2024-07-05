<template>
  <v-card>
    <v-card-title>{{ userStore.fullName }}</v-card-title>
    <v-card-text>
      {{ userStore.userType }}
    </v-card-text>
    <v-card-actions>
      <v-btn color="red">
        <template #prepend>
          <v-icon icon="mdi-location-exit" />
        </template>

        Выйти
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
</script>

<style lang="scss" src="./UserProfileCard.scss"></style>
