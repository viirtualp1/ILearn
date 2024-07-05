<template>
  <VDataIterator :items="news" :page="page" :items-per-page="itemsPerPage">
    <template #default="{ items, page, pageCount, prevPage, nextPage }">
      <template v-for="(newsItem, newsItemIdx) in items" :key="newsItemIdx">
        <NewsCard :title="newsItem.raw.title" :text="newsItem.raw.text" />
      </template>

      <VRow justify="center" gutters align="center">
        <VCol cols="12">
          <VBtn color="indigo" variant="tonal" block @click="showAllNews">
            {{ isExpanded ? 'Скрыть' : 'Показать все' }}
          </VBtn>
        </VCol>

        <template v-if="!isExpanded">
          <VCol class="pt-0" cols="auto">
            <VBtn
              variant="tonal"
              color="indigo"
              :disabled="page === 1"
              size="x-small"
              icon
              @click="prevPage"
            >
              <VIcon icon="mdi-arrow-left" />
            </VBtn>
          </VCol>

          <VCol class="pt-0" cols="auto"> {{ page }} из {{ pageCount }} </VCol>

          <VCol class="pt-0" cols="auto">
            <VBtn
              variant="tonal"
              color="indigo"
              :disabled="page === pageCount"
              size="x-small"
              icon
              @click="nextPage"
            >
              <VIcon icon="mdi-arrow-right" />
            </VBtn>
          </VCol>
        </template>
      </VRow>
    </template>
  </VDataIterator>
</template>

<script setup lang="ts">
import { NewsCard } from '@/domains/News'

const page = ref(1)
const itemsPerPage = ref(4)
const isExpanded = ref(false)

const news = Array.from({ length: 15 }, (_, index) => ({
  title: `Новость ${index}`,
  text: `Текст новости ${index}`,
}))

function showAllNews() {
  isExpanded.value = !isExpanded.value
  itemsPerPage.value = isExpanded.value ? news.length : 4
}
</script>

<style lang="scss" src="./NewsFeed.scss"></style>
