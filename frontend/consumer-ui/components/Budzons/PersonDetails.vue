<template>
  <div class="bg-white p-6 md:flex md:items-center">
    <img class="w-32 rounded-full mx-auto md:mx-0 md:w-48 md:mr-6" :src="person.img">
    <div class="text-center md:text-justify">
      <h3 class="text-lg font-bold">
        {{ person.fullName }}
      </h3>
      {{ person.descr }}
    </div>
  </div>
</template>

<script>
import ValidatedObjectProp from '~/mixins/ValidatedObjectProp'

export default {
  mixins: [
    ValidatedObjectProp('person',
      ['descr', 'fullName', 'img'])
  ]
}
</script>
