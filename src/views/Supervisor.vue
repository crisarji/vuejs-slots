<script>
import CustomList from './../components/CustomList.vue'

export default {
  name: 'Supervisor',
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
  <custom-list :listElements="listElements" itemStyling="justify-between bg-blue-300">
    <template v-slot:element="{ element }">
      <div class="flex w-2/5">
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
        <img
          width="64"
          height="64"
          class="rounded-full"
          :src="element.gender === 'male' ? require('@/assets/images/supervisor-m.png') : require('@/assets/images/supervisor-f.png')"
        />
      </div>
      <div class="flex justify-end w-2/5">
        <div class="flex-column items-center justify-right text-right">
          <p class="text-gray-700 font-semibold">
            Underlyings: {{ element.agents }}
          </p>
          <p class="text-gray-700 font-semibold text-xs">
            Teams: {{ element.teams }}
          </p>
        </div>
      </div>
    </template>
  </custom-list>
</template>
