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
  <div v-slot:author>
     <span
      v-if="author && $siteConfig.posts.displayAuthor"
      class="author-wrapper"
    >
      <strong>Author:</strong> {{ author }} |
    </span>
    <span v-if="date" class="date-wrapper">
      <strong>Published on:</strong> {{ datePretty }}
    </span>
  </div>
   
    {{tags}}
    <div v-slot:tags class="post-tags">
   		<nuxt-link class="post-tags__link" v-for="tag in tags" :key="tag">
   			<span>#</span> {{ tag }}
   		</nuxt-link>
    </div>
  </generic-card>
</template>

<script>
import GenericCard from './GenericCard'
import { getFormattedDate } from '~/helper'
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

.post-tags {
  margin: 1em 0 0;

  &__link {
  	margin-right: .7em;
  	font-size: .8em;
  	color: skyblue;
  	text-decoration: none;
  	background-color: red;
  	color: black!important; //Todo: remove important;
  	padding: .5em;
  	border-radius: 10px;
  }
}
</style>