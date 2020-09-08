<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="Bergen Swamp Preservation Society"
      subtitle="Contact Us"
      image="/uploads/third.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Hello!
              </p>
              <p class="subtitle">
                What can we do for you?
              </p>
              <figure class="image is-1by1 ">
                <opti-image
                  :src="require('~/assets/uploads/contact-image.png').src"
                  :srcset="
                    require('~/assets/uploads/contact-image.png').srcSet
                  "
                />
              </figure>
              <br />
              <div class="content">
                <p>
                  <strong>
                    BERGEN SWAMP PRESERVATION SOCIETY
                  </strong>
                </p>
                <p>
                  <b>Address:</b> P.O. Box 460, Bergen, NY 14416-0460
                </p>
                <p>
                  <b>Country:</b> USA
                </p>
                <p>
                  <b>E-mail:</b> bsps@bergenswamp.org
                </p>
                <p>
                  <b>Phone:</b> (585) 548-7304
                </p>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <contact-form />
            </article>
          </div>
        </div>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <!-- Latest Posts -->
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import ContactForm from '~/components/ContactForm'
export default {
  head() {
    return {
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  },
  components: { ContactForm }
}
</script>
