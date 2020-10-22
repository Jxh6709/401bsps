<template>
  <div class="card">
    <div v-if="trails || stops" class = "tags">
      <div v-for="tag in trails" :key="tag">
          <nuxt-link :key="tag" :to="`/trails/${tag}`">{{ tag }}</nuxt-link>
        </div>
        <div v-for="tag in stops" :key="tag">
          <nuxt-link :key="tag" :to="`/stops/${tag}`">{{ tag }}</nuxt-link>
        </div>
    </div>
    <div class="card-image">
      <component :is="link ? 'nuxt-link' : 'span'" :to="link">
        <figure :class="`image is-${imageRatioClass}`">
          <opti-image
            v-if="image"
            :src="responsiveImage.src"
            :srcset="responsiveImage.srcSet"
            :width="imageRatio[0]"
            :height="imageRatio[1]"
            :sizes="`(min-width: 768px) ${100 / $siteConfig.posts.perRow}vw`"
          />
          <loading-spinner position="absolute" />
        </figure>
      </component>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <nuxt-link :to="link">
            <h3
              :class="
                `title
                is-5
                ${title ? '' : 'empty-content-placeholder'}`
              "
            >
              {{ title }}
            </h3>
            <slot></slot>
          </nuxt-link>
          <slot name="tags"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const imageDimensionDefault = '16x9'
export default {
  props: {
    title: { type: String, default: '' },
    image: { type: String, default: '' },
    link: { type: String, default: '' },
    imageDimensions: { type: String, default: imageDimensionDefault },
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
    }

  },
  computed: {
    imageRatioClass() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault
      return imageDimensions.toLowerCase().replace('x', 'by')
    },
    imageRatio() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault
      return imageDimensions
        .toLowerCase()
        .split('x')
        .map((size) => {
          return size * 2000
        })
    },
    responsiveImage() {
      if (this.image.indexOf('/uploads') === 0) {
        return require(`~/assets${this.image}`)
      }
      return { src: this.image, srcSet: '' }
    }
  }
}
</script>
<style scoped lang="scss">
.subtitle {
  opacity: 0.5;
  font-size: 0.8rem;
}
.empty-content-placeholder {
  background: transparent;
  color: transparent;
  position: relative;
  height: 1em;
  &:before {
    transform-origin: left;
    content: '';
    background: #eee;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    animation: fillHorizontal 2s linear infinite;
  }
  &.subtitle {
    width: 70%;
  }
}

.tags {
  z-index: 1;
  position: relative;
  margin-left: -0.5rem;
}

.tags div {
  border: 0.5px solid #000000;
  padding: 0.3em .7em;
  border-radius: 32px;
  transition: .25s all;
  margin: 5px;
}

.tags div:hover{
  background: #ebeced;
  transition: .5s all;
}

.tags a{
  color: black;
  transition: .25s all;
}
</style>
<style lang="scss">
.card {
  width: 442px;
  background: #FFFFFF;
  border-radius: 24px;
}
.opti-image-loaded + .spinner-wrapper {
  display: none;
}
.card img {
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}
</style>
