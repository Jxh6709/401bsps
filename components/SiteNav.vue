<template>
  <nav
    class="navbar has-shadow is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <site-logo v-if="$siteConfig.logo === 'logo-component'" />
        <img
          v-else
          :src="$siteConfig.logo"
          :alt="$siteConfig.siteName"
          class="logo"
        />
        <span class="whiteTxt" style="margin-left:5px;">Bergen Swamp Preservation Society</span>
      </nuxt-link>
      <hamburger-button @click="active = !active" />
    </div>

    <div
      :class="{
        'navbar-menu': true,
        'is-active': active
      }"
    >
      <ul class="navbar-end">
        <li
          v-for="item in $siteConfig.mainMenu"
          :key="item.link"
          class="navbar-item"
          @click="active = false"
        >
          <component
            :is="item.link.startsWith('http') ? 'a' : 'nuxt-link'"
            :href="item.link"
            :to="item.link"
            :target="item.target ? item.target : '_self'"
            class="whiteTxt"
          >
            {{ item.name }}
          </component>
        </li>
        <li class="whiteTxt navbar-item site-search-wrapper">
          <site-search />
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import SiteSearch from '~/components/SiteSearch'
import HamburgerButton from '~/components/HamburgerButton'
export default {
  name: 'SiteNav',
  components: { SiteSearch, HamburgerButton },
  data() {
    return {
      active: false
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar-item img {
  max-height: 2rem;
}
.site-search-wrapper {
  transform: translateX(5px);
  @media (max-width: 1023px) {
    display: none;
  }
}
.navbar-burger {
  height: auto;
}

.navbar-menu a {
  display: block;
}

.navbar-menu a:hover, 
.navbar-menu a:focus, 
{
  color: #6FCF97;
}

.navbar-menu a:after {
  content: '';
  display: none;
  color: #6FCF97;
  padding: 5px;
  border-bottom: 3px solid #6FCF97;
  width: 0;
  position: absolute;
  right: 0;
  -webkit-transition: 1s ease;
  transition: 1s ease;
}

.navbar-menu a:focus:after { 
  display: block;
  width: 100%; 
}

.navbar {
  background: #0B2838;
}
.navbar-menu {
  background: #0B2838;
}
.whiteTxt {
  color: white;
}
</style>
