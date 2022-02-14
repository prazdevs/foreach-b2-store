<template>
  <div>
    <v-btn @click="goBack">
      <v-icon>
        mdi-arrow-left
      </v-icon>
      RETOUR
    </v-btn>
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
import { getPost } from '@/apis/posts'
import { ERROR } from '@/router/names';

export default {
  data() {
    return {
      post: {},
      error: "",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    async getCurrentPost() {
      try {
        this.post = await getPost(this.$route.params.id)
      } catch(e) {
        this.$router.push({ name: ERROR, query: { error: e } })
      }
    }
  },
  async mounted() {
    await this.getCurrentPost()
  },
};
</script>
