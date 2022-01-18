<template>
  <div id="app">
    counter: {{ counter }}
    <button @click="increment">increment</button>
    <div>name: {{ monPrenom }}</div>
    <div>
      <input v-model="newName" @keydown.enter="changeFirstName(newName)" />
    </div>
    <button @click="fetchPost">GET POST</button>
    <div>{{ $store.state.auth.token }}</div>
    <div>{{ $store.getters.fullName }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { INCREMENT_COUNTER, CHANGE_FIRST_NAME } from "./store/mutations";

export default {
  name: "App",
  data() {
    return {
      newName: "",
    };
  },
  computed: {
    token() {
      return this.$store.state.token
    },
    ...mapState({
      counter: (state) => state.counter,
      monPrenom: (state) => state.firstName,
    }),
  },
  methods: {
    fetchPost() {
      this.$store.dispatch('getPost')
    },
    ...mapMutations({
      increment: INCREMENT_COUNTER,
      changeFirstName: CHANGE_FIRST_NAME,
    }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
