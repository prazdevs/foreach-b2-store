<template>
  <div>
    <v-btn @click="increment">{{ `counter: ${counter}` }}</v-btn>
    <!-- <v-btn v-for="n in numbers" :key="n" :disabled="isSelected(n)" @click="select(n)">
      {{ n }}
    </v-btn> -->
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

import { ADD_TO_SELECTED, INCREMENT_COUNTER } from '@/store/mutations'

export default {
  name: 'UsingStore',
  data() {
    return {
      numbers: [1, 2, 3],
    }
  },
  computed: {
    ...mapState({
      selected: 'selected',
      counter: 'counter'
    })
  },
  methods: {
    isSelected(n) {
      return this.selected.includes(n)
    },
    ...mapMutations({
      select: ADD_TO_SELECTED,
      increment: INCREMENT_COUNTER,
    })
  }
}
</script>