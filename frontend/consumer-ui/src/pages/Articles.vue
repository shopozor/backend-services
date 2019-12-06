<template>
  <Layout>
    <h1>Articles</h1>
    <div v-if="$page.hasura.productvariants.length">
	    <div class="articles" v-for="variant in $page.hasura.productvariants" :key="variant.id">
	      <p>{{ variant.name }}</p>
	    </div>
    </div>
    <div v-else>
    	<p>No articles found</p>
    </div>
  </Layout>
</template>

<page-query>
query {
  hasura {
    productvariants {
      id
      name
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Articles'
  }
}
</script>
