 gcn<template>
  <div id="category-page" class="page-wrapper category-page">
    <site-hero
      :title="tagname"
      :subtitle="$store.state.content"
      :image="$store.state.image"
    />
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <!-- Posts in Category -->
        <posts-grid :category="[$store.state.name]" :per-row="2" />
      </template>
<!--      <template v-slot:sidebar>
        <h3 class="subtitle">
          All Categories
        </h3>
        <div class="panel">
          <nuxt-link
            v-for="cat in allCats"
            :key="cat.slug" :to="`/categories/${cat.slug}`"
            :class="{
              'panel-block': true,
              'is-active': cat.slug === $route.params.single
            }"
          >
            {{ cat.name }}
          </nuxt-link>
        </div>
      </template> -->
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
  computed : {
  	tagname : ()=>{
  		return decodeURI(window.location.pathname).split("/tags/")[1]
  	}
  },
  fetch({ store, params }) {
    console.log("store");
    console.log(store);
    console.log("Params");
    console.log(params);
    setPageData(store, { resource: 'category', slug: params.single })
  },
  async created() {
    this.allCats = await this.$cms.category.getAll()
    console.log(this.$store);
    console.log(await this.$cms.post.getAll())
    console.log(await this.$cms.trail.getAll())
  }
}
</script>
