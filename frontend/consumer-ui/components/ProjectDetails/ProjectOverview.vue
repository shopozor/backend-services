<template>
  <div>
    <!-- TODO: extract this css out because it's used in other places -->
    <h2 class="overview-title">
      <!-- <h2 class="font-extrabold text-3xl text-center"> -->
      Le concept
    </h2>
    <div class="p-6 text-justify">
      <span v-html="description" />
    </div>
  </div>
</template>

<script>
import overview from '~graphql/projectOverview'

export default {
  apollo: {
    site: {
      query: overview
    }
  },
  computed: {
    description () {
      return this.site ? this.site[0].description : ''
    }
  }
}
</script>
