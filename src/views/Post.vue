<template>
  <div>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
    <button @click="getCurrentPost">réessayer</button>
  </div>
</template>

<script>
import { getPost } from '../apis/posts'

export default {
  data() {
    return {
      post: {},
      error: "",
    };
  },
  methods: {
    async getCurrentPost() {
      try {
        this.post = await getPost(this.$route.params.id)
      } catch(e) {
        this.error = e
      }
    }
  },
  async mounted() {
    await this.getCurrentPost()
  },
};
</script>
