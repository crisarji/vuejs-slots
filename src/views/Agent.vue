<script>
import CustomList from './../components/CustomList.vue'

export default {
  name: 'Agent',
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
  <custom-list :listElements="listElements" itemStyling="justify-between bg-gray-300">
    <template v-slot:element="{ element }">
      <div class="flex w-1/5">
        <img
          width="64"
          height="64"
          class="rounded-full"
          :src="element.avatar || require('@/assets/images/agent.png')"
        />
      </div>
      <div class="flex w-3/5">
        <div class="flex-column items-center justify-center text-left">
          <p class="text-gray-700 font-semibold">
            {{ element.name }}
          </p>
          <p class="text-gray-700 font-semibold text-xs">
            DNI: {{ element.id }}
          </p>
        </div>
      </div>
      <div class="flex w-1/5">
        <div class="flex-column items-center justify-center text-left">
          <p class="text-gray-700 font-semibold">
            Calls: {{ element.calls }}
          </p>
          <p class="text-gray-700 font-semibold text-xs">
            Deals: {{ element.deals }}
          </p>
        </div>
      </div>
    </template>
  </custom-list>
</template>
