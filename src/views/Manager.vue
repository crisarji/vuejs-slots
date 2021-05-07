<script>
import CustomList from './../components/CustomList.vue'

export default {
  name: 'Manager',
  components: {
    CustomList
  },
  props: {
    listElements: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<template>
  <custom-list :listElements="listElements" itemStyling="justify-between bg-green-300">
    <template v-slot:element="{ element, index }">
      <div class="flex w-2/5">
        <div class="flex-column items-center justify-center text-left">
          <p class="text-gray-700 font-semibold">
            {{ index }} - {{ element.name }}
          </p>
          <p class="text-gray-700 font-semibold text-xs">
            DNI: {{ element.id }}
          </p>
        </div>
      </div>
      <div class="flex justify-center w-2/5">
        <div class="flex-column items-center justify-center text-center">
          <p class="text-gray-700 font-semibold">
            Department:
          </p>
          <p class="text-gray-700 font-semibold text-sm">
            {{ element.department }}
          </p>
        </div>
      </div>
      <div class="flex w-1/5">
        <img
          width="64"
          height="64"
          class="rounded-full"
          :src="element.gender === 'male' ? require('@/assets/images/manager-m.png') : require('@/assets/images/manager-f.png')"
        />
      </div>
    </template>
  </custom-list>
</template>
