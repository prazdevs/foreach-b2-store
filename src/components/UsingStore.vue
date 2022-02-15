<template>
  <div>
    <v-btn @click="increment">{{ `counter: ${counter}` }}</v-btn>
    <!-- <v-btn v-for="n in numbers" :key="n" :disabled="isSelected(n)" @click="select(n)">
      {{ n }}
    </v-btn> -->
    <v-btn class="unique" @click="$emit('be-unique', 'zéro originalité')">bouton unique</v-btn>
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
    increment() {
      if (this.counter < 5) {
        console.log('INCREMENTED')
        this.incrementCounter();
      }
    },
    ...mapMutations({
      select: ADD_TO_SELECTED,
      incrementCounter: INCREMENT_COUNTER,
    })
  }
}
</script>