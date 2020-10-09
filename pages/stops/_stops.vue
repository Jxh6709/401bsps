 <template>
  <div id="category-page" class="page-wrapper category-page">
    <site-hero :title="tagname" :subtitle="currentStop.description" :image="currentStop.image" />
    <main-section theme="one-column">
      <template v-slot:default>
        {{currentStop}}
        <!-- Posts in Category -->
        <!-- <posts-grid :category="[$store.state.name]" :per-row="2" /> -->
          <post-card v-for="item in taggedPosts" :key="item.title"
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
import PostCard from '~/components/cards/PostCard'

export default {
  name: 'TagView',
  components: { PostCard },
  data() {
    return {
      allCats: [],
      allPosts: [],
      currentStop: {}
    }
  },
  computed: {
    tagname: () => {
      return decodeURI(window.location.pathname).split('/tags/')[1]
    },
    taggedPosts() {
      let taggedObjs = []
      const len = this.allPosts.length
      for (let i = 0; i < len; i++) {
        if (this.allPosts[i].trails && this.allPosts[i].trails.includes(this.tagname))
          taggedObjs.push(this.allPosts[i])
      }
      return taggedObjs
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'category', slug: params.single })
  },
  async created() {
    this.allCats = await this.$cms.category.getAll()
    this.allPosts = await this.$cms.post.getAll()
    let stops = await this.$cms.stop.getAll()
    console.log(stops)
    this.currentStop = stops.find(stop => stop.name === this.tagname)
  }
}
</script>
