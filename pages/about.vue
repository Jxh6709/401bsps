<template v-slot:test>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="About Us"
      subtitle="Conservation &amp; Education"
      image="/uploads/fourth.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>The Society is chartered with a three-fold purpose</h3>
          <ol>
            <li>To conserve the flora and fauna of the lands owned by the society. The society holds five properties as sanctuaries to upstate New York 's native flora and fauna. The public is welcome to visit our properties with no charge, but visitors must stay on marked trails. </li>
            <li>To offer schools, colleges, and accredited groups access for the purpose of research and study.In the past ten years, our properties have hosted 6 Doctorial thesis, 8 master 's thesis, 2 undergraduate senior projects, and 8 high school research projects entered into national and state science competitions.<br>In the past 10 years our properties have been an "outdoor classroom " and visited yearly by undergraduate colleges, community colleges, high schools, primary schools, and many different organizations. For information on how to schedule your group visit please refer to our Our Visitor Policy page. </li>
            <li>To publish scientific and cultural information pertaining to the Society lands. The society publishes a biannual newsletter to the membership and presents in New York wetland conferences. </li>
          </ol>
          <h3>We are Dedicated Conservationists</h3>
          <p>
            John Adamski - President
            <br>
            Lynn Braband - Vice-President
            <br>
            Steve Locke - Past President
            <br>
            Lee Blair, Jr - Bergen Stewerdship Chair
            <br>
            Joan Kennedy - Treasurer
            <br>
            Bill Des Jardin - Membership Chair
            <br>
            Barb Drake - Scientific and Education Chair
            <br>
            Mike Deming - Finance Chair
          </p>
          <!--TODO: Broken link - Jordan -->
          <strong>If you are interested in doing research for the Bergen Swamp Preservation Society please review our <a href="research.html">Research Rules</a> page. </strong>
        </div>
        <!--
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Cool Stuff We Do
              </p>
              <p class="subtitle">
                Sooo Cool
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Other Cool Things
              </p>
              <p class="subtitle">
                Just as cool
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                All the cool
              </p>
              <p class="subtitle">
                that is all
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div>
        </div>
        -->
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
<!--
<script>
import QuoteCard from '~/components/cards/QuoteCard'
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  },
  components: { QuoteCard }
}
</script>
-->
