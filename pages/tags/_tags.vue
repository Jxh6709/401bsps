 gcn<template>
  <div id="category-page" class="page-wrapper category-page">
    <site-hero :title="tagname" :subtitle="$store.state.content" :image="$store.state.image" />
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <!-- Posts in Category -->
        <!-- <posts-grid :category="[$store.state.name]" :per-row="2" /> -->
        <post-card v-for="item in taggedObjs" :key="item.title"
          :title="item.title"
          :link="item.slug ? `/${item.slug}` : ''"
          :image="item.featureImage"
          :author="item.author"
          :date="item.date"
          :tags="item.tags"
          :trails="item.trails"
        />
      </template>
    </main-section>
  </div>
</template>
<script>
import { setPageData } from '../../helper'
export default {
  data() {
    return {
      allCats: []
    }
  },
  computed: {
    tagname: () => {
      return decodeURI(window.location.pathname).split('/tags/')[1]
    },
    taggedPosts: () => {
      let taggedObjs = []
      const len = this.allPosts.length
      for (i = 0; i < len; i++) {
        if (this.allPosts[i].trails.includes(tagname))
          taggedObjs.push(this.allPosts[i])
      }
      return taggedObjs
    }
  },
  fetch({ store, params }) {
    console.log('store')
    console.log(store)
    console.log('Params')
    console.log(params)
    setPageData(store, { resource: 'category', slug: params.single })
  },
  async created() {
    this.allCats = await this.$cms.category.getAll()
    this.allPosts = await this.$cms.post.getAll()
    console.log(this.$store)
    console.log(await this.$cms.post.getAll())
    console.log(await this.$cms.trail.getAll())
  }
}
</script>
