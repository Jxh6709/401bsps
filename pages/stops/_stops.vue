 <template>
  <div id="category-page" class="page-wrapper category-page">
    <site-hero :title="tagname" :subtitle="currentStop.description" :image="currentStop.image" />
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <!-- Posts in Category -->
        <!-- <posts-grid :category="[$store.state.name]" :per-row="2" /> -->
        <post-card
          v-for="item in taggedPosts"
          :key="item.title"
          :title="item.title"
          :link="item.slug ? `/${item.slug}` : ''"
          :image="item.featureImage"
          :author="item.author"
          :date="item.date"
          :tags="item.tags"
          :trails="item.trails"
          :stops="item.stops"
        />
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle">All Stops On This Trail</h3>
        <div class="panel">
          <nuxt-link
            v-for="stop in stopsOnTrail"
            :key="stop.name"
            :to="`/stops/${stop.name}`"
            :class="{
              'panel-block': true,
              'is-active': currentStop.name === tagname
            }"
          >{{ stop.name }}</nuxt-link>
        </div>
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
      stopsOnTrail: [],
      currentStop: {}
    }
  },
  computed: {
    tagname: () => {
      return decodeURI(window.location.pathname).split('/stops/')[1]
    },
    taggedPosts() {
      let taggedObjs = []
      const len = this.allPosts.length
      for (let i = 0; i < len; i++) {
        if (
          this.allPosts[i].stops &&
          this.allPosts[i].stops.includes(this.tagname)
        )
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
    this.currentStop = stops.find((stop) => stop.name === this.tagname)
    this.stopsOnTrail = stops.filter((stop) => this.findCommonElements2(stop.trails, this.currentStop.trails))
  },
  methods: {
    findCommonElements2(arr1, arr2) {
      // https://www.geeksforgeeks.org/how-to-find-if-two-arrays-contain-any-common-item-in-javascript/#:~:text=Check%20if%20the%20elements%20from,return%20true%20else%20return%20false.
      // Create an empty object
      let obj = {}
      // Loop through the first array
      for (let i = 0; i < arr1.length; i++) {
        // Check if element from first array
        // already exist in object or not
        if (!obj[arr1[i]]) {
          // If it doesn't exist assign the
          // properties equals to the
          // elements in the array
          const element = arr1[i]
          obj[element] = true
        }
      }
      // Loop through the second array
      for (let j = 0; j < arr2.length; j++) {
        // Check elements from second array exist
        // in the created object or not
        if (obj[arr2[j]]) {
          return true
        }
      }
      return false
    }
  }
}
</script>
