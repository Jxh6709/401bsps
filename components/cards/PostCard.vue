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
    :trails="trails"
    :stops="stops"
  >
    <template v-slot:default>
      <h4
        :class="{
                subtitle: true,
                'is-6': true,
                'empty-content-placeholder': !$slots.default
              }"
      >
        <span v-if="author &amp;&amp; $siteConfig.posts.displayAuthor" class="author-wrapper">
          {{ author }} |
        </span>
        <span v-if="date" class="date-wrapper">
          {{ datePretty }}
        </span>
      </h4>
      <div class = "blurb" v-if="content">
        <!-- <i>{{getContent()}}</i> -->
        {{content | truncate(75, '...')}}
      </div>
      <div class="view">
         🡢
      </div>
    </template>
  </generic-card>
</template> 
<!-- <template v-slot:tags class="post-tags">
   		<nuxt-link class="post-tags__link" v-for="tag in tags" :key="tag" :to="/">
   			<span>#</span> {{ tag }}
   		</nuxt-link>
    </template>-->
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
        return ['test tag']
      }
    },
    trails: {
      type: Array,
      default() {
        return []
      }
    },
    stops: {
      type: Array,
      default() {
        return []
      }
    },
    content: {
      type: String,
      default: 'Welcome to the Bergen Swamp'
    }
  },
  computed: {
    datePretty() {
      return getFormattedDate(this.date)
    }
  },
  filters: {
    truncate: function (text, length, suffix) {
      //https://stackoverflow.com/questions/35070271/vue-js-components-how-to-truncate-the-text-in-the-slot-element-in-a-component
      return text.substring(0, length) + suffix;
    },
  }
  // methods: {
  //   getContent: () => {
  //     if (this.content.includes(".")) {
  //       this.blurb = this.content.split(".")[0];
  //     }else {
  //       this.blurb = this.content;
  //     }
  //   }
  // },
}
</script>
<style lang="scss">
#trails-page .column, #stops-page .column{display: flex; flex-wrap: wrap; justify-content: space-between;}
#trails-page .card{display: block; margin: .5rem 0; flex: 0 1 calc(33% - .3rem);}
#stops-page .card{margin: .5rem 0; flex: 0 1 calc(50% - .5rem); display: block;}
#trails-page .sidebarInfo, #stops-page .sidebarInfo{justify-content: flex-start;}


@media screen and (max-width: 1215px){#trails-page .card{flex-basis: calc(50% - .5rem);}}
@media screen and (max-width: 768px){#trails-page .card, #stops-page .card{flex-basis: 100%;}}

.blurb {
  color: #808080;
}

.view {
  text-align: right;
  color: black;
}

.tags {
  z-index: 1;
  position: relative;
  margin-left: 10px;
}

.tags div {
  border: 0.5px solid #000000;
  padding: 0.1em .7em;
  border-radius: 32px;
  transition: .25s all;
  margin-left: 10px;
}

.tags div:hover{
  background: #ebeced;
  transition: .5s all;
}

.tags a{
  color: black;
  transition: .25s all;
  font-weight: lighter;
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
