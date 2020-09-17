<template>
   <div class="post-tags">
   		<nuxt-link class="post-tags__link" v-for="tag in tags" :key="tag" >
   			<span>#</span> {{ tag }}
   		</nuxt-link>
    </div>
</template>

<script>
export default {
  props: {
	tags: {
      type: Array,
      default() {
        return ["test tag"]
      }
    },
  }
}
</script>

<style lang="scss">
.post-tags {
  margin: 1em 0 0;

  &__link {
  	margin-right: .7em;
  	font-size: .8em;
  	color: currentColor;
  	text-decoration: none;
  	background-color: var(--bg-color);
  	color: currentColor!important; //Todo: remove important;
  	padding: .5em;
  	border-radius: var(--radius);
  }
}
</style>