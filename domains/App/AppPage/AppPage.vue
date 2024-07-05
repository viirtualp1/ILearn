<template>
  <div class="app-page">
    <VContainer>
      <VRow gutters justify="center">
        <VCol cols="12" md="2">
          <UserProfileCard />
        </VCol>
        <VCol cols="12" md="3">
          <NewsFeed />
        </VCol>
        <VCol cols="12" md="2">
          <AppApps />
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>

<script setup lang="ts">
import { UserProfileCard } from '@/domains/User'
import { AppApps } from '@/domains/App'
import { NewsFeed } from '@/domains/News'
</script>
