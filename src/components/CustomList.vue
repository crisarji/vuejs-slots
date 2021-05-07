<script>
import NoElements from './NoElements'

export default {
  name: 'CustomList',
  components: {
    NoElements
  },
  props: {
    listElements: {
      type: Array,
      default: () => []
    },
    itemStyling: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <div class="w-screen bg-transparent flex items-center justify-center">
    <ul v-if="listElements.length" class="w-11/12 md:w-full md:max-w-md">
      <li
        v-for="(element, index) in listElements"
        :key="element.id"
        :class="itemStyling"
        class="p-4 mb-3 flex items-center bg-white shadow rounded-lg cursor-move"
      >
        <slot name="element" v-bind:element="element" v-bind:index="index"></slot>
      </li>
    </ul>
    <no-elements v-else />
  </div>
</template>
