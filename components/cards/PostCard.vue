<template>
  <generic-card
    :title="title"
    :image="image"
    :link="link"
    :image-dimensions="
      $siteConfig.posts.imageDimensions ||
        $siteConfig.cards.imageDimensions ||
        null
    "
  >
    <span
      v-if="author && $siteConfig.posts.displayAuthor"
      class="author-wrapper"
    >
      <strong>Author:</strong> {{ author }} |
    </span>
    <span v-if="date" class="date-wrapper">
      <strong>Published on:</strong> {{ datePretty }}
    </span>
    {{tags}}
    <post-tags class="tags" :tags="tags"></post-tags>
  </generic-card>
</template>

<script>
import GenericCard from './GenericCard'
import { getFormattedDate } from '~/helper'
import PostTags from '~/components/PostTags'
export default {
  components: { GenericCard },
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default() {
        return ["test tag"]
      }
    },
  },
  computed: {
    datePretty() {
      return getFormattedDate(this.date)
    }
  }
}
</script>

<style lang="scss">
.tags {
    z-index: 1;
    position: relative;
    width: 2em;
  }
</style>