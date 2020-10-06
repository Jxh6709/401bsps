<template> <generic-card :title="title" :image="image" :link="link" :image-dimensions="
      $siteConfig.posts.imageDimensions ||
        $siteConfig.cards.imageDimensions ||
        null
    "> <template v-slot:default> 
<h4 :class="{
                subtitle: true,
                'is-6': true,
                'empty-content-placeholder': !$slots.default
              }">
	<span v-if="author &amp;&amp; $siteConfig.posts.displayAuthor" class="author-wrapper"> <strong>Author:</strong> {{ author }} | </span> <span v-if="date" class="date-wrapper"> <strong>Published on:</strong> {{ datePretty }} </span> 
</h4>
<div class="tags">
	<div v-for="tag in tags" :key="tag">
		<nuxt-link :key="tag" :to="`/tags/${tag}`"> {{ tag }} </nuxt-link> 
	</div>
</div>
</template> {{tags}} 
<!-- <template v-slot:tags class="post-tags">
   		<nuxt-link class="post-tags__link" v-for="tag in tags" :key="tag" :to="/">
   			<span>#</span> {{ tag }}
   		</nuxt-link>
    </template>-->
</generic-card> </template> <script>
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
	        return ['test tag']
	      }
	    }
	  },
	  computed: {
	    datePretty() {
	      return getFormattedDate(this.date)
	    }
	  }
	}
</script>
<style lang="scss">	.tags {
	  z-index: 1;
	  position: relative;
	  width: 2em;
	}
	
	.post-tags {
	  margin: 1em 0 0;
	
	  &__link {
	    margin-right: 0.7em;
	    font-size: 0.8em;
	    color: skyblue;
	    text-decoration: none;
	    background-color: red;
	    color: black !important; //Todo: remove important;
	    padding: 0.5em;
	    border-radius: 10px;
	  }
	}
</style>
