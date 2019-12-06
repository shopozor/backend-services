<template>
  <Layout>

    <h1>Authors</h1>

    <div v-if="$page.hasura.shops.length">
      <div class="author" v-for="shop in $page.hasura.shops" :key="shop.id">
        <p>{{ shop.name }}</p>
      </div>
    </div>
    <div v-else>
      <p>No authors found. Add one using Hasura Console</p>
    </div>

  </Layout>
</template>

<page-query>
query {
  hasura {
    shops {
      id
      name
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Authors'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
