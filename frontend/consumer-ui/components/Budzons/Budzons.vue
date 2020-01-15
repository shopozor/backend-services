<template>
  <div>
    <h2 class="font-extrabold text-3xl text-center">
      Les Budzons
    </h2>
    <person-details v-for="person in persons" :key="person.fullName" :person="person" />
  </div>
</template>

<script>
import PersonDetails from './PersonDetails'

export default {
  components: {
    PersonDetails
  },
  props: {
    persons: {
      type: Array,
      required: true
    }
  }
}
</script>
