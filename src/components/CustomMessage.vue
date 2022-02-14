<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      counter: 2
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    fullNameObject() {
      return {
        first: this.firstName,
        last: this.lastName,
      }
    }
  },
  props: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    msg: {
      type: String,
      default: '',
    }
  },
  methods:{
    sum(a, b) {
      return a + b
    },
    increment() {
      this.counter++
    }
  }
}
</script>