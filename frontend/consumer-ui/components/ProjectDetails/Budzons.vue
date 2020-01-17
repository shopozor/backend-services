<template>
  <div>
    <h2 class="font-extrabold text-3xl text-center">
      Les Budzons
    </h2>
    <person-details v-for="budzon in budzons" :key="budzon.id" :person="budzon" />
  </div>
</template>

<script>
import PersonDetails from './PersonDetails'
import budzons from '~graphql/budzons'

export default {
  apollo: {
    budzons: {
      query: budzons
    }
  },
  components: {
    PersonDetails
  }
}
</script>
