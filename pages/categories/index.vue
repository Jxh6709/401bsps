<template>
  <div id="categories-page" class="page-wrapper categories-page">
    <site-hero title="Properties" image="/uploads/second.jpg" />
    <main-section theme="one-column">
      <categories-grid />
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Properties | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
